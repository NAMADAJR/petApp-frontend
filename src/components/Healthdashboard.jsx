'use client'

import { useState, useCallback } from 'react'
import { Line, LineChart, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import { Button } from './ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from './ui/Chart'
import { Input } from './ui/Input'
import { Label } from './ui/Label'
import { useToast } from './ui/Use-toast'
import { Bold } from 'lucide-react'

const metrics = {
  stress: {
    label: 'Stress level',
    color: 'hsl(var(--primary))',
    min: 0,
    max: 10,
  },
  pulse: {
    label: 'Pulse',
    color: 'hsl(var(--destructive))',
    min: 60,
    max: 100,
  },
  temperature: {
    label: 'Temperature',
    color: 'hsl(var(--warning))',
    min: 36,
    max: 38,
  },
}

const timeFrames = {
  monthly: {
    label: 'Monthly',
    dataPoints: 5,
    format: (date) => date.toLocaleString('default', { month: 'short' }),
  },
  weekly: {
    label: 'Weekly',
    dataPoints: 7,
    format: (date) => date.toLocaleString('default', { weekday: 'short' }),
  },
  daily: {
    label: 'Daily',
    dataPoints: 24,
    format: (date) => date.getHours() + ':00',
  },
}

const generateRandomData = (timeFrame) => {
  const periods = timeFrame === "monthly" ? 5 : timeFrame === "weekly" ? 7 : 24;
  const labels =
    timeFrame === "monthly"
      ? ["September", "October", "November", "December", "January"]
      : timeFrame === "weekly"
      ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      : Array.from({ length: 24 }, (_, i) => `${i}:00`);

  return labels.map((label) => ({
    label,
    stress: Math.floor(Math.random() * 10) + 1,
    pulse: Math.floor(Math.random() * 40) + 60,
    temperature: (Math.random() * 2 + 36).toFixed(1),
  }));
};
export default function HealthDashboard() {
  const [activeMetric, setActiveMetric] = useState("stress");
  const [timeFrame, setTimeFrame] = useState("monthly");
  const [data, setData] = useState(generateRandomData("monthly"));
  const [userInput, setUserInput] = useState({
    stress: "",
    pulse: "",
    temperature: "",
  });

  const handleInputChange = (metric, value) => {
    setUserInput((prev) => ({ ...prev, [metric]: value }));
  };

  const handleAddData = () => {
    const newDataPoint = {
      label: new Date().toLocaleString(),
      stress: Number(userInput.stress) || 0,
      pulse: Number(userInput.pulse) || 0,
      temperature: Number(userInput.temperature) || 0,
    };
    setData((prev) => [...prev, newDataPoint]);
    setUserInput({ stress: "", pulse: "", temperature: "" });
  };

  const handleTimeFrameChange = (newTimeFrame) => {
    setTimeFrame(newTimeFrame);
    setData(generateRandomData(newTimeFrame));
  };


  const handleDownloadData = useCallback(() => {
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      Object.keys(data[0])
        .filter((key) => key !== 'isToday')
        .join(',') +
      '\n' +
      data
        .map((row) =>
          Object.entries(row)
            .filter(([key]) => key !== 'isToday')
            .map(([, value]) => value)
            .join(',')
        )
        .join('\n')

    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', `health_data_${timeFrame}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [data, timeFrame])

  return (
    <Card className='w-full max-w-3xl'>
      <CardHeader className='flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0 pb-7'>
        <CardTitle className='text-xl font-medium'>Health Overview</CardTitle>
        <div className='flex flex-wrap gap-2'>
          {Object.entries(timeFrames).map(([frame, { label }]) => (
            <Button
              key={frame}
              variant={timeFrame === frame ? 'default' : 'outline'}
              size='sm'
              onClick={() => handleTimeFrameChange(frame)}>
              {label}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className='flex flex-wrap gap-2 mb-6'>
          {Object.entries(metrics).map(([key, { label }]) => (
            <Button
              key={key}
              variant={activeMetric === key ? 'default' : 'outline'}
              onClick={() => setActiveMetric(key)}
              className='flex-1'>
              {label}
            </Button>
          ))}
        </div>
        <ChartContainer
          config={{
            [activeMetric]: {
              label: metrics[activeMetric].label,
              color: metrics[activeMetric].color,
            },
          }}
          className='h-full w-full'>
          <ResponsiveContainer width={730} height={300}>
            <LineChart
              data={data}
              margin={{ top: 20, right: 20, left: 20, bottom: 20 }} // Adjusted margins for better spacing
            >
              
              <XAxis
                dataKey='label'
                stroke='#38618d'
                fontSize={15}
                tickLine={false}
                axisLine={false}
                tick={({ x, y, payload }) => (
                  <g transform={`translate(${x},${y})`}>
                    <text
                      x={0}
                      y={0}
                      dy={16}
                      textAnchor='middle'
                      fill='#38618d'
                      fontSize={12}>
                      {payload.value}
                    </text>
                    {timeFrame === 'weekly' && data[payload.index].isToday && (
                      <circle
                        cx={0}
                        cy={-12}
                        r={4}
                        fill={metrics[activeMetric].color || '#000'}
                      />
                    )}
                  </g>
                )}
              />
              <YAxis
                stroke='#38618d'
                fontSize={18}
                tickLine={false}
                axisLine={false}
                domain={[metrics[activeMetric].min, metrics[activeMetric].max]}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type='monotone'
                dataKey={activeMetric}
                strokeWidth={2} // Increased width for better visibility
                dot={false}
                stroke="#86daa8" // Added fallback color
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className='mt-4 flex flex-col sm:flex-row gap-2'>
          <Button
            onClick={handleDownloadData}
            variant='outline'
            className='flex-1'>
            Download Data
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

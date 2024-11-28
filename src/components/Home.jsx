import { NavBar } from "@/components/nav-bar";
import { MissedAppointments } from "@/components/missed-appointments";
import { Calendar } from "@/components/calendar";
import { UpcomingEvents } from "@/components/upcoming-events";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="flex">
        <MissedAppointments />
        <div className="flex-1 border-l border-r">
          <Calendar />
        </div>
        <UpcomingEvents />
      </div>
    </div>
  );
}

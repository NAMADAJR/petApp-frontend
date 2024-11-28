import { Camera, Settings } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function NavBarr() {
  return (
    <nav className="bg-[#4A6FA5] p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <Link href="/" className="flex items-center text-white text-2xl font-semibold">
            <span className="text-3xl mr-2">🐾</span> PetPal
          </Link>
          
          <div className="flex space-x-8">
            <Link href="/overview" className="text-white/90 hover:text-white">
              Overview
            </Link>
            <Link href="/health" className="text-white/90 hover:text-white">
              Health
            </Link>
            <Link href="/appointments" className="text-[#98FB98]">
              Appointments
            </Link>
            <Link href="/community" className="text-white/90 hover:text-white">
              Community
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-white">
            <Camera className="h-5 w-5" />
          </Button>
          
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Pet profile" />
            <AvatarFallback>MP</AvatarFallback>
          </Avatar>
          
          <Button variant="ghost" size="icon" className="text-white">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}

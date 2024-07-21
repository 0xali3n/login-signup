import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

function Signin() {
  return (
    <Card className="">
      {/* <CardHeader>
        <CardTitle></CardTitle>
        <CardDescription>
          
        </CardDescription>
      </CardHeader> */}
      <CardContent className="space-y-2 p-2">
        
        <div className="space-y-1 border-gray-400 border-2 p-2 rounded-xl">
        <div className="flex-center text-sm gap-1">          
        <FcGoogle className="" size={20}/>
        <p className="font-semibold"> Continue with Google</p>
        </div>

        </div>
        <div></div>
        <div className="space-y-1">
          <Label htmlFor="name">Email</Label>
          <Input id="name" placeholder="Enter your email.."/>
        </div>
        <div className="space-y-1">
          <Label htmlFor="username">Password</Label>
          <Input id="username" placeholder="Enter your password.." />
        </div>
      </CardContent>
      <CardFooter>
        <Button>Sign In</Button>
      </CardFooter>
    </Card>
  );
}

export default Signin;

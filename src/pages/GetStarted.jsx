import React from "react";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "../components/ui/Button";
import heroImage from "../assets/jerryai.jpg";
import { Link } from "react-router-dom";

const GetStarted = () => {
     return (
          <section className="relative w-full min-h-screen flex items-center justify-center p-6">

               <div
                    className="absolute inset-0"
                    style={{
                         backgroundImage: `url(${heroImage})`,
                         backgroundSize: "cover",
                         backgroundPosition: "center",
                         opacity: 0.15,
                    }}
               />

               <div className="relative text-center max-w-xl space-y-4">
                    <div className="flex items-center justify-center gap-2">
                         <Zap size={18} />
                         <span className="text-sm">Trusted by 10M+ creators worldwide</span>
                    </div>

                    <h1 className="text-3xl font-semibold">
                         Welcome to Jerry AI <br />
                         <span className="text-xl font-normal">Your Smart Assistant</span>
                    </h1>

                    <p className="text-base">
                         Boost your productivity with intelligent tools that help you learn,
                         create, and build faster than ever.
                    </p>

                    <div className="flex justify-center">
                         <Link to="/home/login">
                              <Button className="flex items-center gap-1">
                                   Get Started
                                   <ArrowRight size={18} />
                              </Button>
                         </Link>
                    </div>
               </div>

          </section>

     );
};

export default GetStarted;

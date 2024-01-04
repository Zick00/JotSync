"use client";

import { useConvexAuth} from "convex/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Spinner } from "@/components/spinner";

import { SignInButton } from "@clerk/clerk-react";
import Link from "next/link";

export const Heading = () => {
const { isAuthenticated, isLoading } = useConvexAuth();

    return(
        <div className= "max-w-3xl space-y-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
            i tuoi appunti, la tua logica, tutto unificato. benvenuti su 
            <span className= "underline"> JotSync</span>
        </h1>
        <h3 className="text-base sm:text-xl md:text-2xl font-medium">
            JotSync è un ambiente di lavoro <br />
            rapido,semplice, intuitivo.
        </h3>
        {isLoading &&(
            <div className="w-full flex item-center justify-center">
            <Spinner size="lg"/>
            </div>
        )}
        {isAuthenticated && !isLoading &&(
        <Button asChild>
        <Link href="/documents">
        Entra su JotSync
        <ArrowRight className="h-4 w-4 ml-2"/>
        </Link>
        </Button>
        )}
        {!isAuthenticated && !isLoading && (
            <SignInButton mode="modal">
            <Button>
             Get JotSync Free
             <ArrowRight className="h-4 w-4 ml-2"/>
            </Button>
            </SignInButton>
        )}
        </div>
    )
}
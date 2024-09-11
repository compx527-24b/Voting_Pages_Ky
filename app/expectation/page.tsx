import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <MaxWidthWrapper className="mt-10 flex flex-col items-center justify-center text-center sm:mt-12">
        
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">
            E-Volting main page
          </p>
        </div>

        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          <span className="text-blue-600">Question</span> In Voting System
        </h1>

        <p className="mt-5 max-w-prose text-lg text-zinc-700 sm:text-2xl">
          E-Voting system is to be flexible and secured in voting compaing.
        </p>

        <Link
          className={cn(
            buttonVariants({
              size: "lg",
              className: "mt-5",
            }),
            "text-lg",
          )}
          href={"/dashboard"}
        >
          Start Voting Now
        </Link>
      </MaxWidthWrapper>




{/* Scenarios */}
<div>
            <div className="mb-6 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
             
              </div>
            </div>
            {/* steps */}

            <div className="flex items-center justify-center">
              <div className="flex flex-col gap-6 md:flex-row">
                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>At a voting place</CardTitle>
                  <CardDescription className="mb-3 text-center">
                  <a href="whattodo"> What To Do </a>
                  </CardDescription>
                  <Image
                    src="/question.jfif"
                    alt="cafe scenario"
                    width={128}
                    height={128}
                    quality={100} 
                  />
                  
                </Card>

                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>What expectation? </CardTitle>
                  <CardDescription className="mb-3 text-center">
                  <a href="/expectation"> What to expect at the voting place  </a>
                  </CardDescription>
                  <Image
                    src="/question2.jfif"
                    alt="cafe scenario"
                    width={128}
                    height={128}
                    quality={100}
                  />
                </Card>

                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>How is after election?</CardTitle>
                  <CardDescription className="mb-3 text-center">
                  <a href="/whathappend"> What happens after an election? </a>
                  </CardDescription>
                  <Image
                    src="/question1.webp"
                    alt="cafe scenario"
                    width={128}
                    height={128}
                    quality={100}
                  />
                </Card>

                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>Voting From Oversea?</CardTitle>
                  <CardDescription className="mb-3 text-center">
                  <a href="/voteoversea"> How to vote from overseas </a>
                  </CardDescription>
                  <Image
                    src="/question5.jpg"
                    alt="cafe scenario"
                    width={128}
                    height={128}
                    quality={100}
                  />
                </Card>
              </div>
            </div>
            <div className="mb-6 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <p className="mt-4 text-lg text-gray-600">and many more...</p>
              </div>
            </div>
          </div>
                      
          {/* Powered By */}







      {/* Value Prop */}
      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0a95ff] to-[#95f2fa] opacity-30 sm:left-[calc(50%-20rem)] sm:w-[72.1875rem] sm:translate-y-8"
            />
          </div>

          

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative right-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/3 rotate-[30deg] bg-gradient-to-tr from-[#0a95ff] to-[#95f2fa] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem] sm:translate-y-8"
            />
          </div>
        </div>
      </div>

      {/* Features */}
      <MaxWidthWrapper>
        <div className="mx-auto mt-20 flex max-w-5xl flex-col gap-20 sm:mt-40 sm:gap-40 ">
          {/* Intro */}
          <div>
            <div className="mb-6 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                EXPECTATION OF VOTING
                </h2>

            
                 <p className="text-left  mt-2 text-xl text-black-900 sm:text-2xl"> 
                 
Here’s what to expect when you visit a voting place during the Port Waikato by-election. <br></br>

When you arrive at a voting place, our staff will welcome you and answer any questions you might have. Our staff will be wearing orange vests.<br></br>

There’ll also be signs up directing you where to go.<br></br>

If you have an EasyVote card, bring it with you, and vote close to home. It makes voting faster.<br></br>

If you were enrolled by 14 October, you’ll be on the printed roll at voting places which makes it easier to issue your voting papers.<br></br>


<span className="mt-2 text-2xl font-bold text-blue-900 sm:text-3xl">Photos and filming </span>  <br></br>
Voting is personal so we ask you to respect the privacy of other voters.<br></br>

Please avoid filming or taking any photographs in a voting place.<br></br>

Publishing photos or videos of someone completing their voting paper is a potential offence and not allowed at any voting place.<br></br>

If you have a reason for wanting to film or take photos in a voting place, such as recording a candidate casting their vote, please send us a request in advance to returns@elections.govt.nz<br></br>


<span className="mt-2 text-2xl font-bold text-blue-900 sm:text-3xl">Remaining in a voting place </span>  <br></br>
Once you have voted, we ask that you don’t linger and leave the voting place straight away.<br></br>

This helps us maintain the privacy of the voting process and ensures other voters feel comfortable while casting their own vote.<br></br>


<span className="mt-2 text-2xl font-bold text-blue-900 sm:text-3xl">Social media </span>  <br></br>
During an election there are rules about what you can and can’t do on social media. <br></br>

From midnight before election day until 7pm on election day, you can’t post or share any content that’s likely to - or is intended to - influence someone’s candidate vote or party vote.<br></br>

Paid online election advertising is prohibited on election day.<br></br>

The election day rules make no exemption for the expression of personal political views online.<br></br>


<span className="mt-2 text-2xl font-bold text-blue-900 sm:text-3xl">Our staff </span>  <br></br>
Electoral Commission staff at your voting place are likely to be members of your local community. They want to help you exercise your democratic right to vote.<br></br>

Many of our staff will be working on an election for the first time and there is a lot to remember and do!<br></br>

If you experience any delays, please be patient as our staff carefully follow the steps required to maintain the integrity of our electoral process.<br></br>

<span className="mt-2 text-2xl font-bold text-blue-900 sm:text-3xl">About us </span>  <br></br>
The Electoral Commission Te Kaitiaki Take Kōwhiri runs parliamentary elections. We work to provide an effective and impartial electoral system that New Zealanders understand and trust.<br></br>

All New Zealanders have the right to vote freely. We make sure that your vote remains secret when you’re voting and when we’re counting votes.<br></br>

We ask that you respect the way we manage voting places. Our processes ensure people have a positive experience, and that their privacy and other rights are protected.<br></br>

As a last resort, members of the public who are disruptive or causing a disturbance will be told to leave the voting place. Failure to comply with this direction is an offence and may be referred to police.<br></br>
          </p>
                    

              </div>
            </div>
            {/* steps */}

            <ol className="my-2 space-y-4 pt-2 md:flex md:space-x-6 md:space-y-0 md:px-8">
              <li className="md:flex-1">
                <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-blue-600">
                    Step 1
                  </span>
                  <span className="text-xl font-semibold">
                    Sign up to create Account
                  </span>
                  {/* <span className="mt-2 text-zinc-700">
                Either starting out with a free plan or choose our{" "}
                <Link
                  href="/pricing"
                  className="text-blue-700 underline underline-offset-2"
                >
                  pro plan
                </Link>
                .
              </span> */}
                </div>
              </li>
              <li className="md:flex-1">
                <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-blue-600">
                    Step 2
                  </span>
                  <span className="text-xl font-semibold">
                    Verify <span className="text-blue-600">Your account</span> &{" "}
                    <span className="text-blue-600">in Email</span>
                  </span>
                </div>
              </li>
              <li className="md:flex-1">
                <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-blue-600">
                    Step 3
                  </span>
                  <span className="text-xl font-semibold">
                    Login your account and start your voting
                  </span>
                  {/* <span className="mt-2 text-zinc-700">
                
              </span> */}
                </div>
              </li>
            </ol>
          </div>

          
          

          {/* Scenarios */}
          <div>
            <div className="mb-6 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                  FEEDBACK
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Get Feedback from voters
                </p>
              </div>
            </div>
            {/* steps */}

            <div className="flex items-center justify-center">
              <div className="flex flex-col gap-6 md:flex-row">
                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>HAPPY</CardTitle>
                  <CardDescription className="mb-3 text-center">
                  
                  </CardDescription>
                  <Image
                    src="/happy.png"
                    alt="cafe scenario"
                    width={128}
                    height={128}
                    quality={100} 
                  />
                  
                </Card>

                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>Angry </CardTitle>
                  <CardDescription className="mb-3 text-center">
                  
                  </CardDescription>
                  <Image
                    src="/angry.png"
                    alt="cafe scenario"
                    width={128}
                    height={128}
                    quality={100}
                  />
                </Card>

                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>Surprise</CardTitle>
                  <CardDescription className="mb-3 text-center">
                  
                  </CardDescription>
                  <Image
                    src="/surprise.png"
                    alt="cafe scenario"
                    width={128}
                    height={128}
                    quality={100}
                  />
                </Card>

                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>Upset</CardTitle>
                  <CardDescription className="mb-3 text-center">
                 
                  </CardDescription>
                  <Image
                    src="/upset.png"
                    alt="cafe scenario"
                    width={128}
                    height={128}
                    quality={100}
                  />
                </Card>
              </div>
            </div>
            <div className="mb-6 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <p className="mt-4 text-lg text-gray-600">and many more...</p>
              </div>
            </div>
          </div>





          
        </div>
      </MaxWidthWrapper>

      <Footer />
    </>
  );
}

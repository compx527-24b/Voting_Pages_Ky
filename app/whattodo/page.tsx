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
            <div className="mb-6 px-6 lg:px-8 ">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                WHAT TO DO
                </h2>
                <p className="mt-4 text-lg text-gray-600 text-start">
                Learn how to vote in a general election, by-election, referendum or local election.
                 </p>
                 <h2 className=" mt-2 text-2xl font-bold text-red-900 sm:text-3xl text-left text-left"> Voting in a general election      </h2>
                 
                 <p className="text-left"> Every 3 years, New Zealand has a general election. If you’re enrolled, you can vote.<br></br>
                    Not enrolled yet? Enrol now<br></br>
                    The next general election will be held in 2026.<br></br>
                    <br></br>
                  <span className=" mt-2 text-2xl font-bold text-red-900 sm:text-3xl text-left"> Your Volting information pack      </span> <br></br>
                 
                  - If you're enrolled by about a month before election day, you’ll get a voting information pack in the mail. The pack tells you: <br></br>  
                  - how to vote <br></br>
                  - who the candidates and political parties are<br></br>
                  - when you can vote<br></br>
                  - how to find voting places near you. <br></br>
                  - You’ll also get an EasyVote card that makes voting quicker on the day.<br></br>
                  <br></br>

                  <span className=" mt-2 text-2xl font-bold text-red-900 sm:text-3xl"> When can you vote?      </span><br></br>
                 
                  - Voting starts about 2 weeks before election day and ends at 7pm on election day, so you’ve got plenty of time to vote. <br></br>
                  - On election day, voting places are open from 9am to 7pm. <br></br>
                  - If you want to vote before election day, the opening hours might be different. Check this website closer to election time for the opening hours of voting places near you. <br></br>
                  <br></br>
                  <span className=" mt-2 text-2xl font-bold text-red-900 sm:text-3xl"> Your Volting information pack      </span><br></br>
                
                  - Voting places open across New Zealand, so everyone has a chance to vote. We’ll publish the locations about 3 weeks before election day. <br></br>
                  - Voting is quicker if you vote in the area where you live. However, if you’re away from where you usually live, you can vote at the nearest voting place.<br></br>
                  - Voting from overseas? <br></br>
                 
                  <br></br>
                  <span className=" mt-2 text-2xl font-bold text-red-900 sm:text-3xl"> What do you take with you when you vote?      </span><br></br>
                
                    - Take your EasyVote card with you when you vote. If you haven’t got a card or forget it, you can still vote. <br></br>
                    - You don’t need to take ID.<br></br>
               
                    <br></br>
                  <span className=" mt-2 text-2xl font-bold text-red-900 sm:text-3xl"> what happends when you get to voting place      </span>
                 
                 When you arrive to vote, someone will be there to guide you and answer your questions. <br></br>
                 Give your EasyVote card to the person issuing voting papers. They’ll find your name on the electoral roll and give you a voting paper. <br></br>
                 If you don’t have an EasyVote card, you’ll be asked for your name and address, and finding you on the electoral roll may take a bit longer.<br></br>
                 Once you get your voting paper, you take it to a voting screen where you can vote privately.<br></br>
                 <br></br>
                 <span className=" mt-2 text-2xl font-bold text-gray-900 sm:text-2xl"> You can enrol at a voting place  </span>
                 
                    You need to be enrolled for your vote to count. If you're not enrolled when you get to a voting place, you can enrol there. You can enrol and vote at any voting place, including on election day. You'll need to fill out an enrolment form and a 'special declaration vote' form. Someone will be there to guide you and answer your questions.<br></br>
                    <br></br>
                    <span className=" mt-2 text-2xl font-bold text-gray-900 sm:text-2xl"> You may need to cast a special vote </span>
                    If your name is not on the printed roll at a voting place, you'll need to fill out a 'special declaration vote' form before you can vote. This is known as a 'special vote'.<br></br>

                    Your name may not be on the printed roll if:<br></br>

                    You enrolled after the roll was printed<br></br>
                    You're voting away from your home electorate<br></br>
                    You're on the unpublished roll<br></br>
                    <br></br>
                    <span className=" mt-2 text-2xl font-bold text-gray-900 sm:text-2xl">  If you need help to read or mark your voting paper </span>
                    A friend, family member or someone working at the voting place can help you mark your voting paper. They can’t tell you who to vote for, but they can:<br></br>
                    go to the voting screen with you<br></br>
                    read out the words and information on the voting paper<br></br>
                    mark the voting paper for you if you ask them to.<br></br>
                  
                    <br></br>
                  <span className=" mt-2 text-2xl font-bold text-red-900 sm:text-3xl  "> How do you vote?   </span><br></br>
                 
                    You get two votes — a party vote and an electorate vote.<br></br>

                    Your party vote is for the political party you want to be in government.<br></br>

                    Your electorate vote is for the candidate you would like to be the member of Parliament for the area you live in.<br></br>

                    You can vote for a party and a candidate, or vote for only one or the other — it’s your choice.<br></br>
                    <br></br>
                    <span className=" mt-2 text-2xl font-bold text-gray-900 sm:text-2xl"> Voting for a party  </span>
                    
                    On the left side of the voting paper, tick the circle next to the name of the party you choose. You can only vote for one party.<br></br>
                    <br></br>
                    <span className=" mt-2 text-2xl font-bold text-gray-900 sm:text-2xl"> Voting for a candidate  </span>

                    On the right side of the voting paper, tick the circle next to the name of the candidate you choose. You can only vote for one candidate.<br></br>

                    <br></br>
                    <span className=" mt-2 text-2xl font-bold text-gray-900 sm:text-2xl">  Don’t worry if you make a mistake when you’re voting  </span>
                   
                    If you make a mistake when you’re voting, you can take your ‘spoilt’ voting paper back and ask for another one. Spoilt papers aren’t counted.<br></br>
                    <br></br>
                    <span className=" mt-2 text-2xl font-bold text-gray-900 sm:text-2xl">  Putting your voting paper into the ballot box </span>
                    
                    When you’ve finished marking your voting paper:<br></br>
                    fold it in half<br></br>
                    put it into the ballot box. <br></br>
                    Your vote will be counted after voting closes. How are votes counted?<br></br>
                    <br></br>
                    <span className=" mt-2 text-2xl font-bold text-gray-900 sm:text-2xl"> Voting in a by-election   </span>
                    
                    A by-election is held to fill a vacancy when a member of Parliament who represents an electorate leaves their role. There is no party vote.<br></br>

                    In a by-election, you vote for the candidate you want to represent your electorate in Parliament.<br></br>

                    To be eligible to vote, you must be enrolled in the electorate where the by-election is being held.<br></br>
          
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
                  HOW TO VOTE
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Get help or following instruction to vote your candidate
                </p>
              </div>
            </div>
            {/* steps */}

            <div className="flex items-center justify-center">
              <div className="flex flex-col gap-6 md:flex-row">
                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>At a voting place</CardTitle>
                  <CardDescription className="mb-3 text-center">
                  <a href="/whattodo"> What To Do </a>
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

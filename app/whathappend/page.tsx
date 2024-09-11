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
          <span className="text-blue-600">WHAT HAPPEND</span> AFTER VOTING
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
      {/*-------------------------------*/}

{/* Scenarios */}
<div>
            
            {/* steps */}
            <br></br><br></br>
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
          

          




      {/* Features */}
      <MaxWidthWrapper>
        <div className="mx-auto mt-20 flex max-w-5xl flex-col gap-20 sm:mt-40 sm:gap-40 ">
          {/* Intro */}
          <div>
            <div className="mb-6 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                
                
                <p className="text-left  mt-2 text-xl text-black-900 sm:text-2xl"> 
                Voting in a general election finishes at 7pm on election day – but the election isn’t over yet. There’s a lot that needs to be done before we get to the official result.<br></br>
                
                <span className="mt-2 text-2xl font-bold text-blue-900 sm:text-3xl">Counting the votes - preliminary results </span>  <br></br><br></br>
                <span className="mt-2 text-2xl font-bold text-blue-900 sm:text-3xl">Early votes </span>  <br></br><br></br>

The process of counting the votes starts before voting closes on election day.<br></br>

Any ordinary votes made before election day are securely transported to electorate headquarters, where the count begins. Like all votes at a parliamentary election, these votes are counted by hand. Candidates and parties may appoint scrutineers to witness this count.<br></br>

The results from the count of early votes aren’t released until after voting closes at 7pm.<br></br><br></br>


<span className="mt-2 text-2xl font-bold text-blue-900 sm:text-3xl">Election day votes</span>  <br></br><br></br>
Once election day voting places close at 7pm, the staff at each voting place begin the process of counting the ordinary votes made that day. Again, these votes are counted by hand, in the presence of scrutineers. Once the count at a voting place is complete, results are phoned through to electorate headquarters for inclusion in the preliminary results.<br></br>
<br></br>
<br></br>
<span className="mt-2 text-2xl font-bold text-blue-900 sm:text-3xl">Releasing the results</span>  <br></br><br></br>
Starting this count during the day on election day means we can start releasing results as soon after 7pm as possible. The preliminary results are released to the public progressively throughout the night as voting places around the country complete their counts.<br></br>

We publish them on electionresults.govt.nz and also release information to media via a data feed which allows them to present visualisations of the results.<br></br>

Once all voting places have reported in and all checks have been conducted we publish a media release announcing the preliminary results.<br></br>

These results are likely to change. They don’t include special votes (which includes votes from overseas) and we haven’t yet scrutinised the rolls – so while they may give an indication, they’re not directly comparable with the official results.<br></br>

How are general election votes counted? (elections.nz)<br></br>

Election integrity (elections.nz)<br></br><br></br>
<span className="mt-2 text-2xl font-bold text-blue-900 sm:text-3xl">Counting the votes – official results</span>  <br></br><br></br>


<span className="mt-2 text-2xl font-bold text-blue-900 sm:text-3xl">Scrutiny of the rolls</span>  <br></br><br></br>
To begin the official count, we conduct a process called “scrutinising the roll”. We compare every copy of the electorate roll in each electorate to identify voters who may have voted more than once.<br></br>

If we detect that a voter may have voted more than once we conduct an investigation. If someone votes more than once we don’t include their voting papers in the official count.<br></br>

<br></br>
<span className="mt-2 text-2xl font-bold text-blue-900 sm:text-3xl">Processing and checking special votes</span>  <br></br><br></br>
Voters make a “special” vote when they’re not on the printed electoral roll at the voting place – for example if they’re voting outside their electorate, voting from overseas, are on the unpublished roll, or if they enrolled close to election day.<br></br>

Before we count special votes, we first return them to the electorate they were cast for. We then check every special vote declaration to make sure the voter is enrolled and eligible to vote.<br></br>

Special votes are only added to the official count once these checks have been done.<br></br>


<br></br>
<span className="mt-2 text-2xl font-bold text-blue-900 sm:text-3xl">Rechecking and recounting voting papers</span>  <br></br><br></br>
During the official count, we recheck and recount all of the voting papers that were counted on election day.<br></br>

As with the preliminary count, the official count is conducted by hand. We do not use vote counting machines.<br></br>

Because special votes are now included, and because any invalid votes have been removed from the count, the preliminary results and the official results are not directly comparable.<br></br>

Once the count is complete for each voting place during the official count, the totals are recorded on a certificate of results which is signed by the returning officer and a Justice of the Peace.<br></br>

<br></br>
<span className="mt-2 text-2xl font-bold text-blue-900 sm:text-3xl">Declaring the official results</span>  <br></br><br></br>
When the official count is final, the Chief Electoral Officer declares the official election results by publishing a notice in the official government newspaper, the New Zealand Gazette.<br></br>

How are general election votes counted? (elections.nz)<br></br>

Election integrity (elections.nz)<br></br><br></br>


<span className="mt-2 text-2xl font-bold text-blue-900 sm:text-3xl">Recounts and petitions</span>  <br></br><br></br>
For a limited time after a general election it’s possible to challenge official election results through recounts or election petitions.<br></br>

<br></br>
<span className="mt-2 text-2xl font-bold text-blue-900 sm:text-3xl">Recounts</span>  <br></br><br></br>
A recount could be for the electorate votes in an electorate, or for the party votes in an electorate. It’s also possible to apply for a recount of party votes in all electorates.<br></br>

Electorate candidates can apply for a recount of the electorate vote in the electorate they contested.<br></br>
Party secretaries may apply for a recount of the party vote.<br></br>
Applications for a recount must be made within 3 working days of official results being declared.<br></br>
Applications must include a deposit which varies depending on the type of recount.<br></br>
<br></br>

<span className="mt-2 text-2xl font-bold text-blue-900 sm:text-3xl">Election petitions</span>  <br></br><br></br>
An election petition is the only way to challenge the election of an electorate candidate, or to challenge the way party list seats were allocated.<br></br>

Election petitions must come before the High Court within 28 days of official results being declared.<br></br>

Election recounts and petitions (elections.nz)<br></br>

<br></br>
<span className="mt-2 text-2xl font-bold text-blue-900 sm:text-3xl">Government formation</span>  <br></br><br></br>
Every candidate who wins an electorate gets a seat in Parliament.<br></br>

The remaining seats are filled from party lists according to the share of the party vote each party got.<br></br>

The political party or group of parties with the most seats becomes the government. Under MMP, one party may not have a large enough share of the votes to govern alone. Parties usually have to negotiate to form a government.<br></br>

How votes create a government (parliament.nz)<br></br><br></br>


<span className="mt-2 text-2xl font-bold text-blue-900 sm:text-3xl">What happens to voting papers?</span>  <br></br><br></br>
After the official count, voting papers are sealed in envelopes and put in boxes closed with tamper-proof seals.<br></br>

The Office of the Clerk of Representatives arranges for the boxes to be held in secure storage for six months after the election in case the voting papers are needed for a legal challenge.<br></br>

After six months, they are taken out of storage and destroyed securely, witnessed by representatives of the Office of the Clerk and the Electoral Commission.<br></br>

What happens to voting papers? (elections.nz)<br></br>
                    
                    
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

          {/*----------------------------------------*/}
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

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
          <span className="text-blue-600">HISTORY</span> NEW ZEALAND VOTING RESULT
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




{/* steps */}
              <br></br>
              <div className="flex items-center justify-center">
              <div className="flex flex-col gap-6 md:flex-row">
                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>2023 General Election</CardTitle>
                  <CardDescription className="mb-3 text-center">
                  <a href="https://elections.nz/democracy-in-nz/historical-events/2023-general-election/">READ MORE </a>
                  </CardDescription>
                  <Image
                    src="/genelec23.jpg"
                    alt="cafe scenario"
                    width={128}
                    height={128}
                    quality={100} 
                  />
                  
                </Card>

                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>Enrol to vote </CardTitle>
                  <CardDescription className="mb-3 text-center">
                  <a href="https://vote.nz/enrolling/enrol-or-update/enrol-or-update-online/"> Enrol now  </a>
                  </CardDescription>
                  <Image
                    src="/enrolvote.jpg"
                    alt="cafe scenario"
                    width={128}
                    height={128}
                    quality={100}
                  />
                </Card>

                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>ELECTION OPTION</CardTitle>
                  <CardDescription className="mb-3 text-center">
                  <a href="https://vote.nz/maori-electoral-option/about-the-option/about/what-is-the-maori-electoral-option/"> READ MORE </a>
                  </CardDescription>
                  <Image
                    src="/electoption.jpg"
                    alt="cafe scenario"
                    width={128}
                    height={128}
                    quality={100}
                  />
                </Card>

                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>Find your electorate on a map</CardTitle>
                  <CardDescription className="mb-3 text-center">
                  <a href="/voteoversea"> FIND OUT </a>
                  </CardDescription>
                  <Image
                    src="/electmap.jpg"
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
                
                <div className="text-left">
                <h2 className="mt-2 text-4xl font-bold text-pink -900 sm:text-2xl">NEW ZEALAND ELECTION RESULTS</h2> <br></br>
Official results for New Zealand’s parliamentary elections.<br></br>

The 2023 General Election official results now include a statistics section with voting place information and special vote statistics. <br></br>

<a className="text-blue-900 sm:text-xl" href ="https://electionresults.govt.nz/2023_port_waikato_byelection/"> Official results for the 2023 Port Waikato by-election </a><br></br> <br></br>
<h2 className="mt-2 text-4xl font-bold text-pink -900 sm:text-2xl">General Elections </h2> <br></br>
<a className="text-green-900 sm:text-xl" href ="https://electionresults.govt.nz/electionresults_2023/">2023 General Election - 14 October 2023 </a><br></br>

<a className="text-blue-900 sm:text-xl" href ="https://electionresults.govt.nz/electionresults_2020/">2020 General Election and Referendums - 17 October 2020 </a><br></br>
<a className="text-green-900 sm:text-xl" href ="https://electionresults.govt.nz/electionresults_2017/">2017 General Election - 23 September 2017</a><br></br>
<a className="text-blue-900 sm:text-xl" href ="https://electionresults.govt.nz/electionresults_2014/ ">2014 General Election - 20 September 2014</a><br></br>
<a className="text-green-900 sm:text-xl" href ="https://electionresults.govt.nz/electionresults_2011/">2011 General Election and Referendum - 26 November 2011</a><br></br>
<a className="text-blue-900 sm:text-xl" href ="https://electionresults.govt.nz/electionresults_2008/">2008 General Election - 8 November 2008</a> <br></br>
<a className="text-green-900 sm:text-xl" href ="https://electionresults.govt.nz/electionresults_2005/">2005 General Election - 17 September 2005</a><br></br> 
<a className="text-blue-900 sm:text-xl" href ="https://electionresults.govt.nz/electionresults_2002/">2002 General Election - 27 July 2002</a><br></br>
<a className="text-green-900 sm:text-xl" href ="https://electionresults.govt.nz/electionresults_1999/">1999 General Election and the Local Restoration Poll - 27 November 1999</a><br></br>
<a className="text-blue-900 sm:text-xl" href ="https://electionresults.govt.nz/electionresults_1996/">1996 General Election and the Local Restoration Poll - 12 October 1996</a><br></br>
<a className="text-green-900 sm:text-xl" href ="https://elections.nz/democracy-in-nz/historical-events/18901993-general-elections">Election results prior to 1994</a><br></br>

<h2 className="mt-2 text-4xl font-bold text-pink -900 sm:text-2xl">By-elections </h2> <br></br>
<a className="text-blue-900 sm:text-xl" href ="https://electionresults.govt.nz/2023_port_waikato_byelection/">2023 Port Waikato by-election - 25 November 2023</a><br></br>
<a className="text-green-900 sm:text-xl" href ="https://electionresults.govt.nz/2022_hamilton_west_byelection/">2022 Hamilton West by-election - 10 December 2022</a><br></br>
<a className="text-blue-900 sm:text-xl" href ="https://electionresults.govt.nz/2022_tauranga_byelection/">2022 Tauranga by-election - 18 June 2022</a><br></br>
<a className="text-green-900 sm:text-xl" href ="https://electionresults.govt.nz/2018_northcote_byelection/">2018 Northcote by-election - 9 June 2018</a><br></br>
<a className="text-blue-900 sm:text-xl" href ="https://electionresults.govt.nz/2017_mt_albert_byelection/">2017 Mt Albert By-election - 25 February 2017</a><br></br>
<a className="text-green-900 sm:text-xl" href ="https://electionresults.govt.nz/2016_mt_roskill_byelection/">2016 Mt Roskill By-election - 3 December 2016</a><br></br>
<a className="text-blue-900 sm:text-xl" href ="https://electionresults.govt.nz/2015_northland_byelection/">2015 Northland By-election - 28 March 2015</a><br></br>
<a className="text-green-900 sm:text-xl" href ="https://electionresults.govt.nz/2013_christchurch_east_byelection/">2013 Christchurch East By-election - 30 November 2013</a><br></br>
<a className="text-blue-900 sm:text-xl" href ="https://electionresults.govt.nz/2013_ikaroa_rawhiti_byelection/">2013 Ikaroa-Rāwhiti By-election - 29 June 2013</a><br></br>
<a className="text-green-900 sm:text-xl" href ="https://electionresults.govt.nz/2011_te_tai_tokerau_byelection/">2011 Te Tai Tokerau By-election - 25 June 2011</a><br></br>
<a className="text-blue-900 sm:text-xl" href ="https://electionresults.govt.nz/2011_botany_byelection/">2011 Botany By-election - 5 March 2011</a><br></br>
<a className="text-green-900 sm:text-xl" href ="https://electionresults.govt.nz/2010_mana_byelection/">2010 Mana By-election - 20 November 2010</a><br></br>
<a className="text-blue-900 sm:text-xl" href ="https://electionresults.govt.nz/2009_mt_albert_byelection/">2009 Mt Albert By-election - 13 June 2009</a><br></br>
<a className="text-green-900 sm:text-xl" href ="https://electionresults.govt.nz/2004_byelection/">2004 Te Tai Hauauru By-election - 10 July 2004</a><br></br>
<a className="text-blue-900 sm:text-xl" href ="https://electionresults.govt.nz/1998_taranaki_byelection/">1998 Taranaki-King Country By-election - 2 May 1998</a><br></br>
<a className="text-green-900 sm:text-xl" href ="https://electionresults.govt.nz/1994_selwyn_byelection/">1994 Selwyn By-election - 13 August 1994</a><br></br>
<h2 className="mt-2 text-4xl font-bold text-pink -900 sm:text-2xl">Referendums </h2> <br></br>

<a className="text-blue-900 sm:text-xl" href ="https://electionresults.govt.nz/electionresults_2020/referendums-results.html">2020 End of Life Choice Referendum - 17 October 2020</a><br></br>
<a className="text-green-900 sm:text-xl" href ="https://electionresults.govt.nz/electionresults_2020/referendums-results.html/">2020 Cannabis Referendum - 17 October 2020</a><br></br>
<a className="text-blue-900 sm:text-xl" href ="https://electionresults.govt.nz/2016_flag_referendum2/">2016 Second Referendum on the New Zealand Flag - 30 March 2016</a><br></br>
<a className="text-green-900 sm:text-xl" href ="https://electionresults.govt.nz/2015_flag_referendum1/">2015 First Referendum on the New Zealand Flag - 15 December 2015</a><br></br>
<a className="text-blue-900 sm:text-xl" href ="https://electionresults.govt.nz/2013_citizens_referendum/">2013 Citizens Initiated Referendum - 17 December 2013</a><br></br>
<a className="text-green-900 sm:text-xl" href ="https://electionresults.govt.nz/electionresults_2011/referendum.html">2011 Referendum on the Voting System – 26 November 2011</a><br></br>
<a className="text-blue-900 sm:text-xl" href ="https://electionresults.govt.nz/2009_citizens_referendum/">2009 Citizens Initiated Referendum - 25 August 2009</a><br></br>
<a className="text-green-900 sm:text-xl" href ="https://electionresults.govt.nz/electionresults_1999/e9/html/e9_partXIII.html/">1999 Citizens Initiated Referendum Poll - Reducing the Number of MPs in Parliament - 27 November 1999</a><br></br>
<a className="text-blue-900 sm:text-xl" href ="https://electionresults.govt.nz/electionresults_1999/e9/html/e9_partXIV.html">1999 Citizens Initiated Referendum Poll - Reform of the Criminal Justice System - 27 November 1999</a><br></br>
<a className="text-green-900 sm:text-xl" href ="https://electionresults.govt.nz/1995_citizens_referenda/">1995 Citizens Initiated Referendum Poll - 2 December 1995</a><br></br>
</div>
          
                    

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

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
          <span className="text-blue-600">Voting</span> Compaing System
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

          <div>
            <div className="mx-auto flex max-w-6xl justify-center px-6 lg:px-8">
              <div className="mt-8 flow-root sm:mt-16">
                <div className="-m-2 w-fit rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10  lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src="/dashboard-preview1.png"
                    alt="product preview"
                    width={955}
                    height={808}
                    quality={100}
                    className="rounded-md bg-special p-2 shadow-2xl ring-1 ring-gray-900/10 md:p-8"
                  />
                </div>
              </div>
            </div>
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
                E-VOTING: ADVANTAGES AND CONCERNS
                </h2>
                <p className="mt-4 text-lg text-gray-600 text-start">
                Electronic voting, also known as E-Voting, is the technique of casting and counting ballots electronically. With the digital age's technological breakthroughs, governments all over the world have begun to investigate the usage of E-Voting technologies to replace the old paper-based voting technique. While this technology promises significant benefits, it also presents legitimate issues that must be addressed.<br></br><br></br>
One of the primary benefits of E-Voting is the possibility for increased voter turnout. Individuals who are unable to physically visit polling booths may miss out on the opportunity to vote under traditional voting systems. E-Voting addresses this issue by allowing voters to cast ballots remotely using only an internet connection. This accessibility has the potential to increase engagement among vulnerable populations such as persons with impairments, the elderly, and those living in rural places.<br></br><br></br>
E-Voting also offers convenience and efficiency. By eliminating the need for physical ballot papers, polling stations, and the manual counting of votes, this technology saves time and reduces human error. Electronic systems can process votes quickly, ensuring faster and more accurate results. Additionally, the digital archives of voting data can make it easier to audit and resolve any disputes related to the election.<br></br><br></br>
However, despite the apparent benefits,  there are some worries about E-Voting. One of the primary concerns is the security and integrity of the voting process. With the increased frequency of cyberattacks and hacking attempts, there is a risk of unauthorized access to voting systems, potentially influencing or destroying the democratic process. Governments must spend extensively in safe and robust systems, deploy strong encryption measures, and undertake frequent security assessments to prevent this danger.<br></br><br></br>
Transparency and verifiability are also issues. Traditional voting allows voters to personally watch and check the process, but E-Voting may not provide this level of openness. Citizens require assurance that their votes are neither tampered with or altered during transmission and storage. Strict regulations, such as the usage of verifiable electronic receipts or paper trails, are critical to creating faith in E-Voting systems.<br></br><br></br>
Furthermore, when it comes to E-Voting, the digital gap is a major worry. Everyone does not have equal access to technology or a stable internet connection. Implementing full-scale E-Voting systems without addressing this discrepancy risks alienating certain elements of the public and exacerbating socioeconomic imbalances. Governments must ensure that alternate voting options are available for those who are unable to use E-Voting systems.<br></br><br></br>
To summarize, electronic voting has the potential to change the democratic process by making it more accessible, efficient, and reliable. Concerns about cybersecurity, transparency, and the digital divide, on the other hand, must be addressed in order to protect the integrity and fairness of elections. Finding the correct balance between the benefits and drawbacks of electronic voting will be critical to the effective implementation and acceptance of this technology in democratic societies.<br></br><br></br>
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

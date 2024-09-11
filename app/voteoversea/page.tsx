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
          <span className="text-blue-600">HOW TO VOTE</span> OVERSEA
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
                  <a href="whathappend"> What happens after an election? </a>
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
                  <a href="voteoversea"> How to vote from overseas </a>
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
              <p className="text-left  mt-2 text-xl text-black-900 sm:text-2xl"> 
                
              It’s easy to vote from overseas and have your say in New Zealand's parliamentary elections.<br></br>

Overseas voting starts about 2 weeks before election day. You won't be able to vote or to get your voting papers before this date.<br></br>
<span className="mt-2 text-2xl font-bold text-black-900 sm:text-xl">Overseas voting using the download service closes at 7pm on election day (NZ time).</span>  <br></br><br></br>
<br></br>

<br></br>
<span className="mt-2 text-2xl font-bold text-blue-900 sm:text-3xl">Vote before you go</span>  <br></br><br></br>
Voting within New Zealand is available from about 2 weeks before election day until 7pm on election day. If you're in New Zealand during this time you can vote at any voting place.<br></br>

<br></br>
<span className="mt-2 text-2xl font-bold text-blue-900 sm:text-3xl">Vote from overseas</span>  <br></br><br></br>
The best way to vote from overseas is to download your voting papers from our website, complete them, then upload them. A link to download your voting papers will be available on this website from the date overseas voting opens.<br></br>

<br></br>
<span className="mt-2 text-2xl font-bold text-black-900 sm:text-1xl">To download your voting papers, you must be enrolled.</span>  <br></br><br></br>
You may also be able to vote in person at an overseas voting place.<br></br>

<br></br>
<span className="mt-2 text-2xl font-bold text-blue-900 sm:text-3xl">Check your eligibility</span>  <br></br><br></br>
The rules about who can vote from overseas have changed. <br></br>

You can enrol and vote from overseas if all the following statements are true: <br></br>

you are 18 years or older <br></br>
you’ve lived in New Zealand for more than 12 months continuously at some time in your life <br></br>
you are one of the following: <br></br>
are a New Zealand citizen who has been in New Zealand within the past three years, or<br></br>
are a permanent resident of New Zealand who has been in New Zealand within the past twelve months.<br></br>
Enrolling from overseas is not compulsory — it’s your choice whether you enrol.
<br></br>
<br></br>
<span className="mt-2 text-2xl font-bold text-blue-900 sm:text-3xl">Are you a permanent resident?</span>  <br></br><br></br>
For electoral purposes, you’re a permanent resident if you’re in New Zealand legally and not required to leave within a specific time.<br></br>

<br></br>
<span className="mt-2 text-2xl font-bold text-blue-900 sm:text-3xl">Are you Niuean, Tokelauan or a Cook Islander?</span>  <br></br><br></br>
If you’re Niuean, Tokelauan, or a Cook Islander, you can vote if you’re enrolled, you’ve lived in New Zealand continuously for 12 months or more, and you've visited New Zealand within the last 6 years.<br></br>

<br></br>
<span className="mt-2 text-2xl font-bold text-blue-900 sm:text-3xl">Are you Australian?</span>  <br></br><br></br>
If you’re Australian you can vote if you’re enrolled, you’ve lived in New Zealand continuously for 12 months or more, and you’ve visited New Zealand in the last 4 years.<br></br>

<br></br>
<span className="mt-2 text-2xl font-bold text-blue-900 sm:text-3xl">Are you a public servant or member of the New Zealand Defence Force?</span>  <br></br><br></br>
You’re eligible to enrol and vote no matter how long you’ve been outside New Zealand if you’re in one of the following groups:<br></br>

Public servants working overseas and their families<br></br>
New Zealand diplomats or trade representatives and their families<br></br>
Members of the New Zealand Defence Force and their families.<br></br>
Depending on when you last visited New Zealand, you may not be able to enrol or update your details online. If you find you're not able to update your details online, please contact us at overseas@vote.nz.<br></br>

<br></br>
<span className="mt-2 text-2xl font-bold text-blue-900 sm:text-3xl">Contact us if you’re no longer eligible</span>  <br></br><br></br>
If you don’t meet the requirements above, please contact us to tell us you’re no longer eligible.<br></br>

Email: overseas@vote.nz<br></br>


Enrole or update your details.<br></br>
Before you can vote, you must be enrolled to vote. If you’re already enrolled, make sure your details are up to date.<br></br>

It’s easy to enrol or update your details online using your New Zealand driver licence, New Zealand passport or RealMe verified identity.<br></br>

<br></br>
<span className="mt-2 text-2xl font-bold text-blue-900 sm:text-3xl">Enrol or update your details online</span>  <br></br><br></br>

To vote from overseas in a New Zealand election, you need to be enrolled by midnight (NZ time) the day before election day.<br></br>

If you're a member of the New Zealand Defence Force who is stationed overseas, you're not required to enrol in order to vote - but if you're not enrolled, you won't be able to download your voting papers.<br></br>


<br></br>
<span className="mt-2 text-2xl font-bold text-blue-900 sm:text-3xl">Get your voting papers</span>  <br></br><br></br>
Your voting papers are not automatically sent to you overseas.<br></br>

The easiest and quickest way to vote from overseas is to download your voting papers. Before you download your voting papers you need to be correctly enrolled.<br></br>

Downloading your voting papers<br></br>

If you're on the unpublished roll you will not be able to download your voting papers. Please contact us on overseas@vote.nz for further assistance.<br></br>

<br></br>
<span className="mt-2 text-2xl font-bold text-blue-900 sm:text-3xl">Find an overseas voting place</span>  <br></br><br></br>
You may also be able to vote at an overseas voting place. A list of overseas voting places will be available on this website prior to the election.<br></br>

Mark your voting papers<br></br>
Tick the circle next to the name of the electorate candidate you choose. You can only vote for one candidate. At a by-election, you do not get a party vote.<br></br>

Overseas voters may now mark their voting paper digitally, and overseas voters and their witnesses can sign the special vote declaration using an electronic device or by inserting a digital signature, as long as it shows their normal signature.<br></br>

You may also choose to print your voting papers and complete them by hand, then scan or photograph and upload them.<br></br>

How to complete your voting papers<br></br>

<br></br>
<span className="mt-2 text-2xl font-bold text-blue-900 sm:text-3xl">Return your voting papers</span>  <br></br><br></br>
When you’ve marked your voting papers, return them to us in one of the following ways:<br></br>

Upload them online<br></br>
Post or hand deliver them to your nearest overseas voting place.<br></br>
You can also return your voting papers by posting them to the Electoral Commission in New Zealand - however we strongly recommend you use one of the other options. Please contact us on overseas@vote.nz if you are not able to do so.<br></br>

You cannot return your voting papers by email or fax.<br></br>


<span className="mt-2 text-2xl font-bold text-black-900 sm:text-xl">If you're uploading your voting papers, you must return them by 7pm (NZ time) on election day.</span>  <br></br><br></br>
Your voting papers will include full information on how to return them.<br></br>

Uploading your voting papers<br></br>

<br></br>
<span className="mt-2 text-2xl font-bold text-blue-900 sm:text-3xl">Telephone dictation voting</span>  <br></br><br></br>
If you’re enrolled to vote and you’re blind, partially blind or have another physical disability that prevents you from marking your voting paper without assistance, you’re eligible to vote by telephone dictation.<br></br>

You need to register to use the telephone dictation service for the general election, even if you've used it at previous elections.<br></br>

<br></br>
<span className="mt-2 text-2xl font-bold text-blue-900 sm:text-3xl">Contact us if you need help</span>  <br></br><br></br>
Email: overseas@vote.nz<br></br>

From overseas +64 9 909 4182 (international call rates may apply)<br></br>

From New Zealand 0800 36 76 56<br></br>
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

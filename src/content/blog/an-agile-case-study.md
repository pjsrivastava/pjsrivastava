---
title: "An Agile Case Study"
description: "An example of applying Agile principles to a Waterfall project."
pubDate: 2020-04-11
topic: "Transitioning to / Understanding Agile"
---

Agile process is great in theory, but can be tough to implement in practice. This is especially true in large, corporate environments where top-down planning and Waterfall methodology is the de facto standard. These environments often wrestle with an array of inefficiencies, and although Agile may be beneficial, for reasons cultural, political, and organizational, it can be a real challenge to introduce.

It’s also a challenge when working in a consulting capacity, as I do. Many clients ask for a contract with a fixed price, a fixed schedule, and a fixed list of deliverables. We often begin a project with a detailed spec, a GANTT chart, and a planned phase of “user acceptance testing”. Not the ideal setup for the Agile practitioner!

Nevertheless, I believe it IS possible to be “more Agile” even under these conditions—in an isolated—but practical way. In my experience, whether or not this is possible boils down to the absence or presence of the right attitude and a few key ingredients. A recent project I completed comes to mind.

This was a small project, but for a big company, and had common “enterprise” project characteristics:

- The project had a long and detailed list of business rules driving its functionality;
- The project called for a very rich UI with many usability concerns;
- Integration was required with an enterprise-class e-commerce system;
- The project was one of a portfolio of components that would be combined and released together.

With this particular project, as is often the case, I was handed the marching orders up front. The client had already prepared detailed requirements, the project was already estimated, a schedule was already prepared, and resources were already assigned. My job was simply to make it happen.

The waterfall nature of the client was apparent from their documents—their GANTT charts were elaborately constructed in Excel, and their “Specifications Matrix” was impressively detailed. We provided our own detailed project plan to match, and the stage, as they say, was set.

Nevertheless, over the course of the next three months, I and my team not only managed this project in a fairly Agile manner, in everyone’s estimation we produced a deliverable that was better than the original spec, we needed no “UAT” phase and relatively minor QA effort. The client was not only very pleased with the end result, they were equally pleased with the process itself.

As I will explain below, I can’t take full credit for this. The reason this happened is that the client was willing to collaborate with us in an Agile manner. They “got it” (lucky for us). The right attitude and the right ingredients were there. Here are the points that I think made the difference:

## **1. We accepted that the final requirements would emerge from interacting with actual code.**

The client initially provided us with a long and detailed list of requirements, which seemed very comprehensive. They had done a lot of analysis.

Nevertheless, I knew many of these requirements would change, many would be found to not be needed, and many more would be “discovered” as we progressed from concept to reality. I was not proved wrong.

Of course it was great to have those specs as a starting point—but I set the expectation early that, given the complexity of this particular project, we would likely not “see” all the requirements until we actually had something to look at and play around with.

This proved to be the case each time we took a forward step. Many new realizations emerged from simply doing wireframes; more still from doing visual designs; and many more from working prototypes and code iterations. The client realized this to be the case quickly, and after a few iterations, adopted the approach of documenting just what was needed for the next iteration. The key to this, of course, was frequent reviews of progress—which I will touch on shortly.

## **2. We inspected and adapted instead of rigidly following the the project plan.**

Don’t get me wrong—I always take careful note of when we need to hit major milestones. But I also know that real project schedules have an inherent volatility, driven by feedback and subject to the uncertainties of the development process itself. Adjusting the plan based on constant evaluation of your progress is how the game really works.

Of course, there’s an important point here: if both sides collaborate on adjusting the plan throughout, it is “Agile”, the right decisions usually get made, and everyone stays happy.

If only one side adjusts the plan, it is considered “breaking the terms of the contract” and somebody (or everybody) may be upset.

Thus “inspecting and adapting” is something which the entire group must do as a team. It means looking at actual progress frequently and deciding how best to proceed, frequently. Non-collaborative parties just want a status report of how progress is relative to the schedule—that’s neither inspecting or adapting. Where there is no real involvement, there are assumptions, arbitrary decisions, and finger-pointing—and the “fixed plan” works against you when reality inevitably varies from it.

Fortunately for us, our client was deeply involved with evaluating and providing direction every step of the way. We varied from the initial project plan, but the corresponding adjustments were appropriate and reflective of the fact that we were involving and listening to our customer.

## **3. We frequently reviewed work-in-progress with the client and with all key stakeholders.**

We reviewed working code three times a week with the client. Whoever heard of having iterative reviews three times a week? Well, you just did.

There’s no hard rule that a “sprint” has to be 30 days, or two weeks long. Review progress at whatever interval is helpful to the project.

When I say “review progress” I’m not talking about a status report. I’m talking about walking through a demo of something tangible. In our case, we had twice weekly “technical reviews”with the client’s integration and business analysis team. These reviews would often be “working sessions” where we would screen-share the IDE and “pair-program” with the client team, respond to their feedback in real-time, and work through solutions together. We also had weekly reviews with all stakeholders, including marketing and executive folks, to show them the latest progress and gather input and feedback.

Since this was a fast moving project, this level of review was greatly beneficial, as it kept everyone on the same page and the project moving forward as efficiently as possible.

## **4. We had highly available, dedicated teams on both sides assigned to the project.**

This is an important detail. Having both a dedicated and cross-functional team—with all the key stakeholders—on both sides of the project is critical. Without it, you won’t be able to make progress quickly enough and predictably enough to have frequent reviews. You won’t get accurate and complete feedback to move efficiently from iteration to iteration. You won’t be able to sustain the flow of interaction and results that is needed to really make this work. It’s very difficult to do Agile in slow-motion, without everyone participating.

Some firms ask the question, “how can we do Agile if our resources are torn between projects, or the key stakeholders can’t afford to be fully involved”? My answer is that if you want to succeed with Agile, then you simply must dedicate the time and be fully committed to the project. Going half way is not likely to get the results.

## **5. We began testing the integration immediately and with each iteration.**

I know well the headaches integration points can cause. Incorrect or overly optimistic assumptions are frequent, and QA can be lengthy and troublesome. This is a common problem when integration is saved for the end of a project, and a lot of backtracking has to occur to figure out why things aren’t working.

To address this, we delivered our prototype code on a weekly basis for the client to integrate into their test environment. It wasn’t complete, and not every integration point was there, but we reasoned that the sooner we started checking things, the better. The benefit was that each week the client could give us QA feedback from inside their environment, and we could work through issues during our twice-weekly technical reviews. It was time well spent.

## **6. We did “UAT” all throughout the project instead of at the end.**

This is really part of my earlier point about having weekly reviews, but it’s worth calling out specifically. In a truly agile process, user acceptance testing happens all throughout the project, with each review of each iteration. Each review should have something the stakeholders can look at, and ideally, interact with. At each review, requirements may change, new requirements may emerge—but some requirements will be considered satisified.

By the end of the project the client will be looking at something they’ve already seen and tested—they know exactly what they’re getting, why it is the way it is, and how it got there. Having followed this process, our client was very comfortable calling the project complete.

To put it simply, if you still have a lengthy “UAT” phase at the end of your project you’re still largely following a waterfall process. The key is to get the stakeholder involvement to perform UAT on a frequent, iterative basis. This is often the difference between a truly agile process and one that only approximates it.

## **Conclusion**

What I like best about an Agile process is that it makes things easier (and often quicker and cheaper, too). Development is less stressful, project management is more straightforward, and there is less chance of there being mismatched expectations, surprises, or an unhappy client. We were fortunate to fall into this category, and develop both an amazing deliverable as well as a great working relationship with our client. Of course, I realize this is not easy to do for every project or environment—remember, we have to have the right ingredients! Hopefully, however, this simple example points to some of the things you need to practice Agile in any environment.

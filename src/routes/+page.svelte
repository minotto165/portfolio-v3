<script lang="ts">
    import "iconify-icon";
    interface repository {
        name: string;
        desc: string;
        url: string;
        tags: string[];
    }

    const repos: repository[] = [
        {
            name: "progoat",
            desc: "LLM-powered CLI for programming education. Generate structured courses on any topic and solve coding exercises directly from your terminal.",
            url: "https://github.com/minotto165/progoat",
            tags: ["Golang", "CLI", "AI"],
        },
        {
            name: "EatenDLP",
            desc: "A Fluent UI YouTube downloader built with WPF and iNKORE.UI.WPF.Modern. Provides a clean, modern interface for content downloads.",
            url: "https://github.com/minotto165/EatenDLP",
            tags: ["Fluent", "WPF"],
        },
        {
            name: "FluentVRC",
            desc: "A Fluent UI launcher for VRChat.",
            url: "https://github.com/minotto165/FluentVRC",
            tags: ["Fluent", "WPF"],
        },
    ];

    let repo: repository;
    let tag: string;
</script>

<div class="min-h-screen w-screen flex flex-col">
    <section class="px-8 md:px-12 py-12 2xl:py-18 flex flex-col items gap-4 lg:gap-7 2xl:gap-10 bg-coffee-100 relative">
        <h1 class="text-6xl sm:text-7xl md:text-9xl lg:text-[12rem] 2xl:text-[16rem] text-coffee-900 relative -left-1 sm:-left-1.25 md:-left-2.5 lg:-left-3.5 2xl:-left-5">Portfolio</h1>
        <h2 class="text-coffee-800 text-3xl md:text-4xl lg:text-6xl 2xl:text-8xl">@minotto165</h2>
        <div class="flex flex-row gap-4 md:gap-8 text-[0.6rem] md:text-sm lg:text-base 2xl:text-lg text-coffee-800 font-normal">
            <p>CLI Tools</p>
            <p>Web</p>
            <p>Motion Design</p>
            <p>Scratch</p>
            <p>And more...</p>
        </div>
        <!-- vertical -->
        <div class="header-line-v left-8 md:left-12"></div>
        <!-- horizontal -->
        <div class="header-line-h top-11.5 sm:top-11.75 lg:top-11.5 2xl:top-17.5"></div>
        <div class="header-line-h top-22.25 sm:top-34.25 lg:top-45.5 2xl:top-62.5"></div>
        <div class="header-line-h top-27.5 sm:top-39.75 lg:top-52 2xl:top-72.25"></div>
        <div class="header-line-h top-33 sm:top-46.25 lg:top-62.75 2xl:top-89.5"></div>
        <div class="header-line-h top-37.75 sm:top-51 lg:top-69.5 2xl:top-99"></div>
        <div class="header-line-h top-39.5 sm:top-53.75 lg:top-72.75 2xl:top-102.5"></div>
    </section>
    <section class="section bg-coffee-50">
        <p class="section-title text-coffee-800">Readme</p>
        <div class="flex flex-col gap-6 2xl:gap-10">
            <h2 class="text-coffee-900 text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-plex font-semibold"># HELLO👋</h2>
            <div class="body-text text-coffee-800">
                <p>I'm Minotto.</p>
                <p>I make small things on the internet from Tokyo, Japan.</p>
                <p>CLI tools, web experiments, motion design, and other weird projects.</p>
            </div>
            <div class="text-coffee-900 text-base md:text-xl lg:text-2xl 2xl:text-3xl flex flex-col sm:flex-row gap-3 md:gap-6">
                <a href="https://github.com/minotto165" target="_blank" class="readme-btn">
                    <p>
                        [ <iconify-icon icon="mingcute:github-line" class="align-bottom -mx-1.5"></iconify-icon> Github ]
                    </p>
                </a>
                <a href="https://x.com/minotto165" target="_blank" class="readme-btn">
                    <p>
                        [ <iconify-icon icon="mingcute:twitter-line" class="align-bottom -mx-1.5"></iconify-icon> Twitter ]
                    </p>
                </a>
                <a href="https://youtube.com/@minotto165" target="_blank" class="readme-btn">
                    <p>
                        [ <iconify-icon icon="mingcute:youtube-line" class="align-bottom -mx-1.5"></iconify-icon> Youtube ]
                    </p>
                </a>
            </div>
        </div>
    </section>
    <section class="section bg-coffee-900">
        <p class="section-title text-coffee-100">Skills</p>
        <div class="flex flex-col gap-8 2xl:gap-10">
            <div class="body-text text-coffee-200">
                <p>Current technical focus.</p>
                <p>My evolving stack for crafting experiments, tools, and digital experiences on the web.</p>
            </div>
            <div class="space-y-3 2xl:space-y-4">
                <div class="flex flex-row items-center w-full gap-6">
                    <p class="bar-title">Golang</p>
                    <div class="bar-bg">
                        <div class="bar-fg w-50/100"></div>
                    </div>
                    <p class="bar-percentage">50%</p>
                </div>
                <div class="flex flex-row items-center w-full gap-6">
                    <p class="bar-title">Scratch</p>
                    <div class="bar-bg">
                        <div class="bar-fg w-95/100"></div>
                    </div>
                    <p class="bar-percentage">95%</p>
                </div>
                <div class="flex flex-row items-center w-full gap-6">
                    <p class="bar-title">Web</p>
                    <div class="bar-bg">
                        <div class="bar-fg w-30/100"></div>
                    </div>
                    <p class="bar-percentage">30%</p>
                </div>
                <div class="flex flex-row items-center w-full gap-6">
                    <p class="bar-title">AfterEffects</p>
                    <div class="bar-bg">
                        <div class="bar-fg w-70/100"></div>
                    </div>
                    <p class="bar-percentage">70%</p>
                </div>
            </div>
        </div>
    </section>
    <section class="section bg-coffee-50">
        <p class="section-title text-coffee-800">Projects</p>
        <div class="flex flex-col md:flex-row gap-4 sm:gap-6 2xl:gap-10 md:pb-4 md:overflow-x-auto md:snap-x md:snap-mandatory">
            {#each repos as repo}
                <div class="w-full md:w-80 lg:w-100 2xl:w-125 sm:h-60 md:h-120 lg:h-140 2xl:h-180 bg-coffee-100 flex flex-row md:flex-col md:shrink-0 md:snap-start">
                    <img alt="progoat" class="bg-amber-700 w-0 sm:w-40 md:w-full h-full md:h-40 lg:h-60 2xl:h-80" />
                    <div class="flex flex-col px-6 py-6 sm:py-4 md:p-7.5 gap-5 2xl:gap-7.5 flex-1">
                        <h2 class="text-coffee-800 text-2xl lg:text-3xl 2xl:text-5xl font-semibold">{repo.name}</h2>
                        <p class="text-coffee-900 text-xs md:text-sm lg:text-base 2xl:text-xl leading-snug">{repo.desc}</p>
                        <div class="flex gap-3">
                            {#each repo.tags as tag}
                                <div class="tag-bg">
                                    <p class="tag-text">{tag}</p>
                                </div>
                            {/each}
                        </div>
                        <a class="btn-bg sm:mt-auto hard-shadow" href={repo.url} target="_blank">
                            <p class="btn-text">
                                <iconify-icon icon="mingcute:github-line" class="align-bottom -mx-1.5"></iconify-icon> Github
                            </p>
                        </a>
                    </div>
                </div>
            {/each}
        </div>
    </section>
</div>

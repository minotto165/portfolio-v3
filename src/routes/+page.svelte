<script lang="ts">
    import "iconify-icon";
</script>

<div class="min-h-screen w-screen flex flex-col">
    <section class="px-12 py-12 2xl:py-18 flex flex-col items gap-7 2xl:gap-10 bg-coffee-100 relative">
        <h1 class="text-[12rem] 2xl:text-[16rem] text-coffee-900 relative -left-3.5 2xl:-left-5">Portfolio</h1>
        <h2 class="text-coffee-800 text-6xl 2xl:text-8xl">@minotto165</h2>
        <div class="flex flex-row gap-8 text-lg text-coffee-800 font-normal">
            <p>CLI Tools</p>
            <p>Web</p>
            <p>Motion Design</p>
            <p>Scratch</p>
            <p>And more...</p>
        </div>
        <!-- vertical -->
        <div class="header-line-v left-12"></div>
        <!-- horizontal -->
        <div class="header-line-h top-11.5 2xl:top-17.5"></div>
        <div class="header-line-h top-45.5 2xl:top-62.5"></div>
        <div class="header-line-h top-52 2xl:top-72.25"></div>
        <div class="header-line-h top-62.75 2xl:top-89.5"></div>
        <div class="header-line-h top-69.5 2xl:top-99"></div>
        <div class="header-line-h top-73 2xl:top-102.5"></div>
    </section>
    <section class="section bg-coffee-50">
        <p class="font-normal text-base 2xl:text-xl text-coffee-800">Readme</p>
        <div class="flex flex-col gap-6 2xl:gap-10">
            <h2 class="text-coffee-900 text-5xl 2xl:text-6xl font-plex font-semibold"># HELLO👋</h2>
            <div class="text-coffee-800 text-xl 2xl:text-3xl space-y-2 2xl:space-y-4">
                <p>I'm Minotto.</p>
                <p>I make small things on the internet from Tokyo, Japan.</p>
                <p>CLI tools, web experiments, motion design, and other weird projects.</p>
            </div>
            <div class="text-coffee-900 text-2xl 2xl:text-3xl flex flex-row gap-6">
                <a href="https://github.com/minotto165" target="_blank">
                    <p>
                        [ <iconify-icon icon="mingcute:github-line" class="align-bottom -mx-1.5"></iconify-icon> Github ]
                    </p>
                </a>
                <a href="https://x.com/minotto165" target="_blank">
                    <p>
                        [ <iconify-icon icon="mingcute:twitter-line" class="align-bottom -mx-1.5"></iconify-icon> Twitter ]
                    </p>
                </a>
                <a href="https://youtube.com/@minotto165" target="_blank">
                    <p>
                        [ <iconify-icon icon="mingcute:youtube-line" class="align-bottom -mx-1.5"></iconify-icon> Youtube ]
                    </p>
                </a>
            </div>
        </div>
    </section>
    <section class="section bg-coffee-900">
        <p class="font-normal text-base 2xl:text-xl text-coffee-100">Skills</p>
        <div class="flex flex-col gap-6 2xl:gap-10">
            <div class="text-coffee-200 text-xl 2xl:text-3xl space-y-2 2xl:space-y-4">
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
                    <p class="bar-percentage">50%</p>
                </div>
                <div class="flex flex-row items-center w-full gap-6">
                    <p class="bar-title">Web</p>
                    <div class="bar-bg">
                        <div class="bar-fg w-20/100"></div>
                    </div>
                    <p class="bar-percentage">50%</p>
                </div>
                <div class="flex flex-row items-center w-full gap-6">
                    <p class="bar-title">AfterEffects</p>
                    <div class="bar-bg">
                        <div class="bar-fg w-70/100"></div>
                    </div>
                    <p class="bar-percentage">50%</p>
                </div>
            </div>
        </div>
    </section>
    <section class="section bg-coffee-50">
        <p class="font-normal text-base 2xl:text-xl text-coffee-800">Readme</p>
        <div class="flex flex-row gap-6 2xl:gap-10">
            <div class="w-125 h-180 bg-coffee-100 flex flex-col">
                <img alt="progoat" class="bg-amber-700 w-full h-80" />
                <div class="flex flex-col p-7.5 gap-7.5 flex-1">
                    <h2 class="text-coffee-800 text-[3rem] font-semibold">progoat</h2>
                    <p class="text-coffee-900 text-xl leading-snug">LLM-powered CLI for programming education. Generate structured courses on any topic and solve coding exercises directly from your terminal.</p>
                    <div class="flex gap-3">
                        <div class="tag-bg">
                            <p class="tag-text">Go</p>
                        </div>
                        <div class="tag-bg">
                            <p class="tag-text">CLI</p>
                        </div>
                    </div>
                    <div class="btn-bg mt-auto">
                        <a href="https://github.com/minotto165" target="_blank" class="btn-text">
                            <p>
                                <iconify-icon icon="mingcute:github-line" class="align-bottom -mx-1.5"></iconify-icon> Github
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

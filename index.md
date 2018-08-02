<style lang="stylus">
@keyframes fadeIn
  0%
    // transform translateY(10px)
    opacity 0
  70%
    // transform translateY(10px)
    opacity 0
  100%
    // transform translateY(0)
    opacity 0.5

img.illustration-fadeIn
    animation 0.5s ease-out 0s 1 fadeIn

h1.welcome
  font-family 'Open Sans', sans-serif
  font-weight 300
  font-size 36pt
  text-align center
.focus
    .feature
        text-align center
        h2
            font-family 'Open Sans', sans-serif
            font-weight bold
            font-size 16pt
.focus-icon-container
    position absolute
    z-index -100
    opacity 0.1
    width 100%
    text-align center
    .focus-icon
        margin-top 6rem
        width 200px
        filter grayscale(50%) sepia(30%)
.services
    display flex
    flex-wrap wrap
    .service
        flex-grow 1
        width 33%
    .service-body
        padding 0.5rem
        display flex
        flex-direction column
        align-items center
        .service-icon
            width 150px
            padding-top 5rem
        .service-heading
            font-family 'Open Sans', sans-serif
            font-weight bold
            font-size 14pt

.link-button
    margin 2rem
    display inline-block
    text-align center
    color #ff6600
    padding 0.8rem 1.6rem
    border-radius 4px
    font-family 'Open Sans', sans-serif
    font-weight bold
    transition background-color .1s ease
    box-sizing border-box
    border 2px solid #ff6600
    &.big
        font-size 1.5rem
    &:hover
        background-color #ff6600
        color white
        text-decoration none !important

.member-logos
    padding 0 5rem
    display flex
    flex-wrap wrap
    justify-content center
    .logo-container
        width 180px
        height 200px
        padding 10px
        display flex
        .member-logo
            margin auto
            max-height 120px
            max-width 120px
            object-fit contain

    @media (max-width: 768px)
        &
            padding 0
            .logo-container
                width 90px
                height 100px
                padding 10px
                .member-logo
                    max-height 90px
                    max-width 90px

</style>

<h1 class="welcome slide-title">Welcome to the openHAB Foundation!</h1>

<img class="illustration illustration-fadeIn" src="/images/smart-home-2769210_1920.jpg" alt="">

We are a nonprofit organisation with the mission to educate the public about the possibilities and benefits of free and open smart home solutions.

More and more new technologies and devices are introduced to our living, working and business environment. Although all of them are designed to make our lives easier, they have a common problem: The lack of interoperability, due to incompatible technology stacks and conflicting commercial interests. Market consolidation and cooperation between all stakeholders therefore remains a vision.

System-wide, multi-vendor interoperability can only succeed if it is free from monetary interests. Free Software is the best option to boost innovation and to make smart home technology available for everybody. Furthermore, Free Software is irreplaceable for research and teaching.

<div style="text-align: center">
    <router-link class="link-button big" to="/join/">Join Us Now! ➜</router-link>
</div>

<h2 class="big-title">Our Focus</h2>

<div class="home">
<div class="features focus">

<div class="feature slide-feature">
<div class="focus-icon-container">
    <img class="focus-icon" src="./icons/open-source.svg" />
</div>
<h2>Free Software</h2>
<p>Free Software is <a target="_blank" href="https://en.wikipedia.org/wiki/Gratis_versus_libre">free as in speech, not free as in beer</a>. We believe that the software that builds the backbone of smart homes must not be closed or restricted, but that everybody must have the freedom to modify and enhance it. We therefore fully support and help to spread the ideal of Free software as proclaimed by the <a target="_blank" href="https://www.fsf.org/">Free Software Foundation (FSF)</a>.</p>
</div>

<div class="feature slide-feature">
<div class="focus-icon-container">
    <img class="focus-icon" src="./icons/home.svg" />
</div>
<h2>Smart Home</h2>
<p><a target="_blank" href="https://en.wikipedia.org/wiki/Home_Automation">Smart Homes</a> are our passion - and therefore we strive to make its benefits better known to the public and also to educate people about associated problems and risks. We specifically believe that smart homes must not mandatorily depend on cloud services, but should work offline as well. This not only assures the independency from the internet, but also addresses data privacy concerns.</p>
</div>

<div class="feature slide-feature">
<div class="focus-icon-container">
    <img class="focus-icon" src="./icons/openhab.png" />
</div>
<h2>openHAB</h2>
<p><a target="_blank" href="https://www.openhab.org">openHAB</a> is one of the most popular open source software solutions for smart homes. It leaves full control and utmost flexibility to the user and is able to serve as an integration point for most smart home products on the market. It focuses on local integration, following the principle of an "Intranet of Things" and has a huge active community of users and developers</p>
</div>

</div>
</div>

<h2 class="big-title">Our Services for the Public</h2>

<!-- /.row -->
<!-- Service List -->
<!-- The circle icons use Font Awesome's stacked icon classes. For more information, visit http://fontawesome.io/examples/ -->
<div class="services">
    <div class="service">
        <div class="service-body">
            <div class="service-icon-container">
                <img class="service-icon" src="./icons/001-question.svg" />
            </div>
            <h4 class="service-heading">Consultancy</h4>
            <p>We are running the <a href="http://community.openhab.org/">openHAB Forum</a>, where we answer questions and provide support.</p>
        </div>
    </div>
    <div class="service">
        <div class="service-body">
            <div class="service-icon-container">
                <img class="service-icon" src="./icons/004-server-1.svg" />
            </div>
            <h4 class="service-heading">Infrastructure &amp; Marketing</h4>
            <p>We run the <a href="https://www.openhab.org/">openHAB official website</a> and maintain the <a href="https://openhab.ci.cloudbees.com/" target="_blank">build server</a>.</p>
        </div>
    </div>
    <div class="service">
        <div class="service-body">
            <div class="service-icon-container">
                <img class="service-icon" src="./icons/005-book.svg" />
            </div>
            <h4 class="service-heading">Reference Documentation</h4>
            <p>As documentation is often scarse, we help on providing a detailed <a href="https://www.openhab.org/docs/" target="_blank">user reference</a>.</p>
        </div>
    </div>
    <div class="service">
        <div class="service-body">
            <div class="service-icon-container">
                <img class="service-icon" src="./icons/003-cloud.svg" />
            </div>
            <h4 class="service-heading">Online Demo</h4>
            <p>We are operating an <a href="https://demo.openhab.org:8443/" target="_blank">openHAB demo server</a>, which gives an easy first impression of it.</p>
        </div>
    </div>
    <div class="service">
        <div class="service-body">
            <div class="service-icon-container">
                <img class="service-icon" src="./icons/006-manual.svg" />
            </div>
            <h4 class="service-heading">Services</h4>
            <p>We are providing guidance and references when professional services are required.</p>
        </div>
    </div>
    <div class="service">
        <div class="service-body">
            <div class="service-icon-container">
                <img class="service-icon" src="./icons/007-app.svg" />
            </div>
            <h4 class="service-heading">Reference Apps &amp; Plugins</h4>
            <p>We publish apps and plugins in various third-party app stores for reference.</p>
        </div>
    </div>
    <div class="service">
        <div class="service-body">
            <div class="service-icon-container">
                <img class="service-icon" src="./icons/002-server.svg" />
            </div>
            <h4 class="service-heading">Proof-of-Concepts</h4>
            <p>We are running <a href="http://www.myopenhab.org" target="_blank">myopenHAB.org</a> to show case the <a href="https://github.com/openhab/openhab-cloud#openhab-cloud" target="_blank">openHAB Cloud</a> features.</p>
        </div>
    </div>
    <div class="service">
        <div class="service-body">
            <div class="service-icon-container">
                <img class="service-icon" src="./icons/008-speaker.svg" />
            </div>
            <h4 class="service-heading">Events</h4>
            <p>Local events are the best way to spread the word - we help and provide speakers.</p>
        </div>
    </div>
    <div class="service">
        <div class="service-body">
            <div class="service-icon-container">
                <img class="service-icon" src="./icons/009-writer.svg" />
            </div>
            <h4 class="service-heading">Blogging</h4>
            <p>Our members regularly <a href="https://www.openhab.org/blog/" target="_blank">blog about smart home</a> topics to share their insights.</p>
        </div>
    </div>
</div>

<router-link to="/imprint.html" style="font-size: 8pt; color: #ccc; display: block; text-align: right">Icons from Flaticon</router-link>


<h2 class="big-title">They Support Us</h2>

<div class="member-logos">
<router-link :to="page.path" v-for="page in $site.pages.filter((p) => p.frontmatter.layout === 'MemberPage')" :v-key="page.path" class="logo-container">
    <img :src="'/logos/' + page.frontmatter.logo" :title="page.title" class="member-logo" />
</router-link>
</div>

<div style="text-align: center">
    <router-link class="link-button" to="/members/">Our Members ➜</router-link>
</div>

<template>
    <div class="home">
        <div class="features">
            <div class="feature slide-membership-type">
                <div class="panel panel-default text-center">
                    <div class="panel-body mb_panel-heading">
                        <img class="img-rounded mb_img" src="/images/puzzle-1019766_Individual_250px.jpg" alt="">
                    </div>
                    <div class="panel-heading">
                        <h4>Sustaining Member</h4>
                        <p>For people who just want to show their appreciation.</p>
                        <span class="price mb_price">2<sub>&euro;</sub></span>
                        <span class="period mb_period">per month<sup><a href="#fees">*</a></sup></span>
                        <a href="/forms/Membership-Application-Form-Individual.pdf" class="join-us-button" target="_blank">Join Now!</a>
                    </div>
                </div>
            </div>
            <div class="feature slide-membership-type">
                <div class="panel panel-default text-center">
                    <div class="panel-body mb_panel-heading">
                        <img class="img-rounded mb_img" src="/images/puzzle-1020388_supporter_250px.jpg" alt="">
                    </div>
                    <div class="panel-heading">
                        <h4>Ordinary Member</h4>
                        <p>For individuals who want to support financially or to actively engage themselves.</p>
                        <span class="price mb_price">10<sub>&euro;</sub></span>
                        <span class="period mb_period">per month<sup><a href="#fees">*</a></sup></span>
                        <a href="/forms/Membership-Application-Form-Individual.pdf" class="join-us-button" target="_blank">Join Now!</a>
                    </div>
                </div>
            </div>
            <div class="feature slide-membership-type">
                <div class="panel panel-default text-center">
                    <div class="panel-body mb_panel-heading">
                        <img class="img-rounded mb_img" src="/images/shops-1014037_business_250px.jpg" alt="">
                    </div>
                    <div class="panel-heading">
                        <h4>Legal Entity</h4>
                        <p>For companies and organisations that share our vision.</p>
                        <span class="price mb_price">50<sub>&euro;</sub></span>
                        <span class="period mb_period">per month<sup><a href="#fees">*</a></sup></span>
                        <a href="/forms/Membership-Application-Form-LegalEntity.pdf" class="join-us-button">Join Now!</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="stylus">
.feature .panel {
    text-align: center;
    border: 1px solid #ddd;
    padding: 1rem;

    &:hover {
        transform: scale(1.1);
        transition: 0.3s;
    }

    h4 {
        font-family: 'Open Sans', sans-serif;
        font-size: 14pt;
    }

    p {
        height: 6rem;
    }

    .price {
        width: 100%;
        font-family: 'Open Sans', sans-serif;
        font-size: 36pt;

        sub {
            vertical-align: top;
        }
    }

    .period {
        padding-left: 5px;
    }
}
</style>

<script>
export default {
  mounted() {
    if (this.$sr) {
      const sr = this.$sr
      sr.reveal(".slide-membership-type", { scale: 1.0, duration: 1000 }, 300)
    }
  }
};
</script>

<template>
    <StarterScreen v-if="showStarterScreen" />
    <div v-else class="followSteps-outerMostDiv">
        <div class="followSteps-outerDiv">
            <div v-if="!showReview" class="flexWrapper-div">
                <div class="headingWrapper" v-motion :initial="{ x: 100, opacity: 0 }"
                    :enter="{ x: 0, opacity: 1, transition: { duration: 800, delay: 50, ease: 'easeInOut' } }">
                    <p class="p-tags stepsHead">Follow the <span class="stepsHead-span">Steps</span></p>
                    <p class="p-tags stepsSubHead">Follow the required 4 steps to start your journey...</p>
                </div>
            </div>
            <!-- ===============testing========= -->
            <div v-if="!showReview" class="stepperFlexDiv">
                <div class="headingWrapper">
                    <v-divider class="stepperTopDivider" color="white"></v-divider>
                    <v-stepper v-model="step" :items="items" show-actions vertical class="stepper">
                        <!-- <template v-for="(item, index) in items" :key="index" v-slot:[`item${index}`]> -->
                        <div class="stepperWindowWrapper">
                            <v-stepper-window>
                                <v-sheet border>
                                    <!-- ========just for index 0 not in the code========== -->
                                    <v-stepper-window-item class="stepperScrollingWindow">
                                        <div>
                                            <p class="stepperFirstHead">Step <span class="stepperFirstHead-txt">01</span>/05
                                            </p>
                                            <p class="stepperSecondHead">Interviewee Name</p>
                                            <v-text-field placeholder="Interviewee name..."></v-text-field>
                                        </div>
                                    </v-stepper-window-item>
                                    <!-- ===================== -->
                                    <v-stepper-window-item class="stepperScrollingWindow">
                                        <div v-motion :initial="{ opacity: 0 }"
                                            :enter="{ opacity: 1, transition: { duration: 300, delay: 200, ease: 'easeIn' } }">
                                            <div>
                                                <p class="stepperFirstHead">Step <span
                                                        class="stepperFirstHead-txt">01</span>/05
                                                </p>
                                                <p class="stepperSecondHead">Interviewee Name</p>
                                                <v-text-field class="textField" variant="outlined"
                                                    placeholder="Interviewee name..."
                                                    v-model="intervieweeName"></v-text-field>
                                                <div>
                                                    <v-btn @click="moveToNextStep" class="view-detail continueBTN"
                                                        :disabled="!isStepValid(1)">Next</v-btn>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- <div>
                                            <p class="stepperFirstHead">Step <span class="stepperFirstHead-txt">01</span>/05
                                            </p>
                                            <p class="stepperSecondHead">Interviewee Name</p>
                                            <v-text-field class="textField" variant="outlined"
                                                placeholder="Interviewee name..." v-model="intervieweeName"></v-text-field>
                                            <div>
                                                <v-btn @click="moveToNextStep" class="view-detail continueBTN"
                                                    :disabled="!isStepValid(1)">Next</v-btn>
                                            </div>
                                        </div> -->
                                    </v-stepper-window-item>
                                    <v-stepper-window-item class="stepperScrollingWindow">
                                        <div v-motion :initial="{ opacity: 0 }"
                                            :enter="{ opacity: 1, transition: { duration: 300, delay: 200, ease: 'easeIn' } }">
                                            <p class="stepperFirstHead">Step <span class="stepperFirstHead-txt">02</span>/05
                                            </p>
                                            <p class="stepperSecondHead">Interviewer Name</p>
                                            <v-text-field class="textField" variant="outlined"
                                                placeholder="Interviewer name..." v-model="interviewerName"></v-text-field>
                                            <div>
                                                <v-btn @click="moveToNextStep" class="view-detail continueBTN"
                                                    :disabled="!isStepValid(2)">Next</v-btn>
                                            </div>
                                        </div>
                                    </v-stepper-window-item>
                                    <v-stepper-window-item class="stepperScrollingWindow">
                                        <div v-motion :initial="{ opacity: 0 }"
                                            :enter="{ opacity: 1, transition: { duration: 300, delay: 200, ease: 'easeIn' } }">
                                            <p class="stepperFirstHead">Step <span class="stepperFirstHead-txt">03</span>/05
                                            </p>
                                            <p class="stepperSecondHead">Position Applied For</p>
                                            <v-text-field class="textField" variant="outlined" placeholder="Position..."
                                                v-model="positionAppliedFor"> </v-text-field>
                                            <div>
                                                <v-btn @click="moveToNextStep" class="view-detail continueBTN"
                                                    :disabled="!isStepValid(3)">Next</v-btn>
                                            </div>
                                        </div>
                                    </v-stepper-window-item>
                                    <v-stepper-window-item class="stepperScrollingWindow">
                                        <div v-motion :initial="{ opacity: 0 }"
                                            :enter="{ opacity: 1, transition: { duration: 300, delay: 200, ease: 'easeIn' } }">
                                            <p class="stepperFirstHead">Step <span class="stepperFirstHead-txt">04</span>/05
                                            </p>
                                            <p class="stepperSecondHead">Experience</p>
                                            <v-text-field class="textField" variant="outlined" placeholder="Experience..."
                                                v-model="experience"></v-text-field>
                                            <div>
                                                <v-btn @click="moveToNextStep" class="view-detail continueBTN"
                                                    :disabled="!isStepValid(4)">Next</v-btn>
                                            </div>
                                        </div>
                                    </v-stepper-window-item>
                                    <v-stepper-window-item class="stepperScrollingWindow">
                                        <div v-motion :initial="{ opacity: 0 }"
                                            :enter="{ opacity: 1, transition: { duration: 300, delay: 200, ease: 'easeIn' } }">
                                            <p class="stepperFirstHead">Step <span class="stepperFirstHead-txt">05</span>/05
                                            </p>
                                            <p class="stepperSecondHead">Enter Email</p>
                                            <v-text-field class="textField" variant="outlined" placeholder="Email..."
                                                v-model="email"></v-text-field>
                                            <div>
                                                <v-btn @click="showReview = true" class="view-detail continueBTN"
                                                    :disabled="!isStepValid(5)">Next</v-btn>
                                                <!-- <v-btn @click="showReview = true" class="view-detail continueBTN">VIEW
                                                    DETAILS</v-btn> -->
                                            </div>
                                        </div>
                                    </v-stepper-window-item>
                                </v-sheet>
                            </v-stepper-window>
                        </div>
                        <!-- </template> -->
                    </v-stepper>
                </div>
            </div>
            <!-- ==============testing=========== -->
            <div v-if="showReview" class="flexWrapper-div">
                <div>
                    <div class="headingWrapper">
                        <p class="p-tags stepsHead">Review <span class="stepsHead-span">Details</span></p>
                        <p class="p-tags stepsSubHead">Follow are the details</p>
                        <v-divider class="stepperTopDivider" color="white"></v-divider>
                        <div>
                            <v-row class="reviewRow">
                                <v-col cols="4" md="6" sm="6">
                                    <div class="reviewCardDiv">
                                        <span class="profileSpanner">
                                            <img :src="profUrl" alt="">
                                        </span>
                                        <div class="reviewCardtxtHolder">
                                            <p class="label">Interviewee name </p>
                                            <p class="labelTxt">John Wick
                                                <!-- {{ intervieweeName }} -->
                                            </p>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="4" md="6" sm="6">
                                    <div class="reviewCardDiv">
                                        <span class="profileSpanner">
                                            <img :src="profUrl" alt="">
                                        </span>
                                        <div class="reviewCardtxtHolder">
                                            <p class="label">Interviewee name </p>
                                            <p class="labelTxt">Peter k
                                                <!-- {{ interviewerName }} -->
                                            </p>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="4" md="6" sm="6">
                                    <div class="reviewCardDiv">
                                        <span class="profileSpanner">
                                            <img :src="profUrl" alt="">
                                        </span>
                                        <div class="reviewCardtxtHolder">
                                            <p class="label">Interviewee name </p>
                                            <p class="labelTxt">Php Developer
                                                <!-- {{ positionAppliedFor }} -->
                                            </p>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="4" md="6" sm="6">
                                    <div class="reviewCardDiv">
                                        <span class="profileSpanner">
                                            <img :src="profUrl" alt="">
                                        </span>
                                        <div class="reviewCardtxtHolder">
                                            <p class="label">Interviewee name </p>
                                            <p class="labelTxt">2 Years
                                                <!-- {{ experience }} -->
                                            </p>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="4" md="6" sm="6">
                                    <div class="reviewCardDiv">
                                        <span class="profileSpanner">
                                            <img :src="profUrl" alt="">
                                        </span>
                                        <div class="reviewCardtxtHolder">
                                            <p class="label">Interviewee name </p>
                                            <p class="labelTxt">tgi@gmail.com
                                                <!-- {{ email }} -->
                                            </p>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                            <div>
                                <router-link to="/review">
                                    <v-btn class="continueBTN">Continue</v-btn>
                                </router-link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import StarterScreen from './StarterScreen.vue';
import prof from '../assets/imgs/profile.png';

export default {
    components: {
        'StarterScreen': StarterScreen,
    },
    data: () => ({
        profUrl: prof,
        showStarterScreen: true,
        shipping: 0,
        showReview: false,
        step: 1,
        intervieweeName: '',
        interviewerName: '',
        positionAppliedFor: '',
        experience: '',
        email: '',
        items: [
            'Interviewee Name',
            'Interviewer Name',
            'Position applied for',
            'Experience',
            'Email',
        ],
        // products: [
        //     {
        //         name: 'Product 1',
        //         price: 10,
        //         quantity: 2,
        //     },
        //     {
        //         name: 'Product 2',
        //         price: 15,
        //         quantity: 10,
        //     },
        // ],
    }),
    methods: {
        moveToNextStep() {
            if (this.step < this.items.length) {
                this.step++;
            }
        },
    },
    computed: {
        subtotal() {
            return this.products.reduce((acc, product) => acc + product.quantity * product.price, 0)
        },
        total() {
            return this.subtotal + Number(this.shipping ?? 0)
        },
        isStepValid() {
            return (step) => {
                switch (step) {
                    case 1:
                        return /^[a-zA-Z\s]+$/.test(this.intervieweeName.trim());
                    case 2:
                        return /^[a-zA-Z\s]+$/.test(this.interviewerName.trim());
                    case 3:
                        return /^[a-zA-Z\s]+$/.test(this.positionAppliedFor.trim());
                    case 4:
                        return /^[a-zA-Z0-9\s]+$/.test(this.experience.trim());
                    case 5:
                        return /\S+@\S+\.\S+/.test(this.email.trim());
                    default:
                        return false;
                }
            };
        },
    },
    mounted() {
        // Set a timeout to hide the StarterScreen after 3 seconds
        setTimeout(() => {
            this.showStarterScreen = false;
        }, 3000);
    },
}
</script>

<style scoped>
.stepsHead {
    color: #F5F5F5;
    font-family: Open Sans;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 5% !important;
}

.stepperSecondHead {
    color: #F5F5F5;
    font-family: Open Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 25px;
}

.stepperFirstHead-txt {
    font-weight: 700;
}

.stepperWindowWrapper {
    width: 70%;
    margin-top: 3%;
}

.continueBTN {
    margin: 10px 0;
}

.textField {
    border-radius: 60px;
    border: 2px solid #4B9AFA;
    height: 62px;
}

.view-detail {
    margin-left: auto;
    display: block;
    margin-top: 50px;
    width: 168px !important;
    height: 62px !important;
}

.stepperFirstHead {
    color: #F5F5F5;
    font-family: Open Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 9px;
}

.v-window-item {
    background-color: #00102C;
    border: 0;
    color: #FFF;
    height: 350px;

}

.v-sheet {
    width: 100%;
    border: 0;
}

.v-stepper-item .v-avatar {
    width: 49px !important;
    height: 49px !important;
    font-size: 20px !important;
}


.stepsHead-span {
    color: #4B9AFA;
    font-weight: 700;
}

.followSteps-outerMostDiv {
    height: 100%;
}

.followSteps-outerDiv {
    background-color: #00102C;
    height: 100%;
}

.p-tags {
    margin: 0;
}

.reviewCardDiv {
    display: flex;
    padding: 10px;
}

.continueBTN {
    color: #FFF;
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    border-radius: 60px;
    background: #4B9AFA;
    width: 273px;
    height: 62px;
}

.stepsSubHead {
    color: #F5F5F5;
    font-family: Open Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.flexWrapper-div {
    display: flex;
    justify-content: center;
}

.headingWrapper {
    width: 85vw;
}

.v-stepper {
    display: flex;
}

.stepper> :first-child {
    display: flex;
    flex-direction: column;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
}

.reviewCardtxtHolder {
    padding: 0 0 0 30px;
}

.reviewRow {
    /* background-color: red; */
    margin: 0;
    padding: 3% 0;
}

.stepper {
    background-color: #00102C;
    box-shadow: none;
    color: white;
}

.stepperTopDivider {
    margin: 3% 0 0 0;
    opacity: 0.2;
}

.stepperFlexDiv {
    display: flex;
    justify-content: center;
}

.v-sheet {
    position: relative;
}

.label {
    color: #F5F5F5;
    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.labelTxt {
    color: #F5F5F5;
    font-family: Open Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

@media (max-width: 920px) {
    .continueBTN {
        width: 170px;
        height: 60px;
    }
}
</style>
<style>
.v-stepper-actions {
    max-height: 100px;
    /* background: red !important; */
    position: absolute;
    bottom: 0;
    right: 0;
}

.v-stepper-item {
    margin: 5% 0 0 0;
}

.v-stepper-item--selected .v-stepper-item__title {
    color: #4B9AFA !important;
}

.v-stepper-item__content .v-stepper-item__title {
    color: #F5F5F5;
    text-align: right;
    font-family: Open Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: left;
}

.v-stepper-actions .v-btn {
    display: none;
}

.profileSpanner {
    width: 48px;
    height: 48px;
    border-radius: 60px;
    background: #4B9AFA;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
<style>
.v-field__outline {
    display: none !important;
}

.v-stepper-item .v-avatar {
    width: 49px !important;
    height: 49px !important;
    font-size: 0px !important;
    background-image: url(../assets/imgs/profile.png) !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
}

.v-stepper-item--selected .v-avatar {
    background-color: #4B9AFA !important;
}
</style>
<template>
    <div class="testScreenContainer">
        <div v-if="!testCompleted" class="testScreen-wrapper">
            <p v-motion :initial="{ opacity: 0 }"
                :enter="{ opacity: 1, transition: { duration: 300, delay: 200, ease: 'easeIn' } }" class="testBannerTxt">
                Answer the following Questions</p>
            <v-row>
                <v-col cols="8">
                    <p class="testSubTxt" v-motion :initial="{ opacity: 0 }"
                        :enter="{ opacity: 1, transition: { duration: 300, delay: 300, ease: 'easeIn' } }">Choose the right
                        answer and click next or click skip if you don’t know the answer.
                    </p>
                </v-col>
                <v-col cols="4">
                    <div class="clockTimerWrapper">
                        <img class="clock-img" :src="clock" />
                        <!-- counter is there -->
                        <CounterClock />
                    </div>
                </v-col>
            </v-row>
            <v-divider class="testScreenDivider"></v-divider>

            <h1 class="questionTest" v-motion :initial="{ opacity: 0 }"
                :enter="{ opacity: 1, transition: { duration: 300, delay: 400, ease: 'easeIn' } }">{{ currentQuestion + 1
                }}. {{ questions[currentQuestion].question }}</h1>

            <div class="optionsWrapper">
                <v-radio-group v-model="selectedAnswer">
                    <v-row>
                        <v-col v-for="(option, index) in questions[currentQuestion].options" :key="index" cols="6">
                            <v-radio color="#4B9AFA" :label="option" :value="index"></v-radio>
                        </v-col>
                    </v-row>
                </v-radio-group>
            </div>
            <div class="btnDivWrapper">
                <v-btn @click="skipQuestion" class="skipBtn"
                    :disabled="isLastQuestion || selectedAnswer !== null">Skip</v-btn>
                <v-btn @click="nextQuestion" class="nextBtn" :disabled="selectedAnswer === null"> {{ currentQuestion ===
                    questions.length - 1 ? "Finished" :
                    "Next" }}</v-btn>
            </div>
            <FooterCom class="positioningForTest" />
        </div>
        <div v-else class="testScreen-wrapper">
            <div class="headingWrapper">
                <v-row>
                    <v-col cols="6">
                        <p class="p-tags stepsHead">Final <span class="stepsHead-span">Result</span></p>
                        <p class="p-tags stepsSubHead">Your result and analytics</p>
                    </v-col>
                    <v-col cols="6">
                        <div class="passedWrapper">
                            <!-- <p class="passed-failed">PASSED</p> -->
                            <img :src="down" class="download" />
                        </div>
                    </v-col>
                </v-row>
            </div>
            <v-divider class="testScreenDivider"></v-divider>
            <v-row>
                <v-col cols="12" lg="6" md="12">
                    <div class="chartSpan-DivHolder">
                        <div class="chartSpan">
                            <Doughnut class="myChart" :data="chartConfig.data" :options="chartConfig.options"
                                :plugins="chartConfig.plugins" />
                            <span class="chartPercentage" v-motion :initial="{ opacity: 0 }"
                                :enter="{ opacity: 1, transition: { duration: 500, delay: 500, ease: 'easeInOut' } }">
                                <p>60%</p>
                            </span>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" lg="6" md="12" class="detailGraphCol">
                    <div class="detailGraphHolder">
                        <v-card class="progressCard">
                            <div style="margin: 20px">
                                <v-row class="progressWrapper">
                                    <v-col cols="3"><span class="detailsHeadings">Correct</span></v-col>
                                    <v-col class="progres-col"><v-progress-linear model-value="20"
                                            color="#4B9AFA"></v-progress-linear></v-col>
                                    <v-col cols="2"> <span class="marks">06/10</span></v-col>
                                </v-row>
                                <v-row class="progressWrapper">
                                    <v-col cols="3"><span class="detailsHeadings">Wrong</span></v-col>
                                    <v-col class="progres-col"><v-progress-linear model-value="20"
                                            color="#FF9D01"></v-progress-linear></v-col>
                                    <v-col cols="2"> <span class="marks">02/10</span></v-col>
                                </v-row>
                                <v-row class="progressWrapper">
                                    <v-col cols="3"><span class="detailsHeadings">Skipped</span></v-col>
                                    <v-col class="progres-col"><v-progress-linear model-value="20"
                                            color="#183C6F"></v-progress-linear></v-col>
                                    <v-col cols="2"> <span class="marks">02/10</span></v-col>
                                </v-row>
                            </div>
                        </v-card>
                    </div>
                </v-col>
            </v-row>
            <FooterCom class="footerInTestScreen" />
        </div>
    </div>
</template>

<script>
import clock from '../assets/imgs/clock.svg'
import CounterClock from '../components/helperComponents/counterClock.vue'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
// import * as chartConfig from './chartConfig.js'
import down from '../assets/imgs/down.png'
import { data, options } from './chartConfig'
import FooterCom from '../components/helperComponents/FooterCom.vue'


ChartJS.register(ArcElement, Tooltip, Legend)

export default {
    components: {
        CounterClock: CounterClock,
        Doughnut,
        FooterCom: FooterCom

    },
    data() {
        return {
            correctWidth: '80%', // Set the initial width dynamically
            wrongWidth: '10%',   // Set the initial width dynamically
            skippedWidth: '10%',
            questions: [
                {
                    question: "What is an array?",
                    options: [
                        "An array is a collection of similar data elements",
                        "An array is a Lorem Ipsum text baseline",
                        "An array is a data structure",
                        "An array is not used in programming",
                    ],
                    correctAnswer: 0,
                },
                {
                    question: "What is an Js?",
                    options: [
                        "An array is a collection of similar data elements",
                        "An array is a Lorem Ipsum text baseline",
                        "An array is a data structure",
                        "An array is not used in programming",
                    ],
                    correctAnswer: 0,
                },
                {
                    question: "What is an Html?",
                    options: [
                        "An array is a collection of similar data elements",
                        "An array is a Lorem Ipsum text baseline",
                        "An array is a data structure",
                        "An array is not used in programming",
                    ],
                    correctAnswer: 0,
                },
                {
                    question: "What is an CSS?",
                    options: [
                        "An array is a collection of similar data elements",
                        "An array is a Lorem Ipsum text baseline",
                        "An array is a data structure",
                        "An array is not used in programming",
                    ],
                    correctAnswer: 0,
                },
            ],
            currentQuestion: 0,
            selectedAnswer: null,
            testCompleted: false,
            clock: clock,
            // chartConfig: chartConfig,
            down: down,
            chartConfig: {
                data,
                options,
                // other chart configurations...
            },




        };
    },
    computed: {
        isLastQuestion() {
            return this.currentQuestion === this.questions.length - 1;
        },
    },
    methods: {
        nextQuestion() {
            if (this.selectedAnswer !== null) {

                this.currentQuestion++;
                this.selectedAnswer = null;
                if (this.currentQuestion === this.questions.length) {
                    this.testCompleted = true;
                }
            } else {
                alert("Please select an answer before moving to the next question.");
            }
        },
        skipQuestion() {
            this.currentQuestion++;
            this.selectedAnswer = null;
            if (this.currentQuestion === this.questions.length) {
                this.testCompleted = true;
            }
        },
    },
};
</script>

<style scoped>
.testScreenContainer {
    background: #00102C;
    height: 100%;
    color: white;
    display: flex;
    justify-content: center;
}

.questionTest {
    color: #FFF;
    font-family: Open Sans;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 30px;
}

.positioningForTest {
    position: absolute;
    bottom: 15px;
    right: 0;
    left: 0;
}

.chartSpan {
    /* background-color: red; */
    /* width: 500px;
    height: 500px; */
    width: 300px;
    height: 300px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 2%; */
    padding: 45px;
    background: rgba(75, 154, 250, 0.1);
    position: relative;
}

.myChart {
    z-index: 5;
    height: 250px !important;
    width: 250px !important;
}

.progressCard {
    max-width: 663px;
    border-radius: 10px;
    border: 2px solid rgba(75, 154, 250, 0.20);
    background: #071E40;
    box-shadow: 0px 0px 12px 0px rgba(36, 36, 36, 0.25);
    padding: 25px;
    margin: auto;
}

.detailGraphHolder {
    margin-top: 25px;
}

.marks {
    color: #4B9AFA;
    font-family: Open Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.detailsHeadings {
    color: #F5F5F5;
    font-family: Open Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.detailGraphCol {
    /* display: flex;
    justify-content: center;
    align-items: center; */
}

.chartPercentage {
    color: #4B9AFA;
    text-align: center;
    font-family: Open Sans;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 38px;
    position: absolute;
    background-color: white;
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.progres-col {
    margin: auto 0;
}

.progressWrapper {
    /* display: flex; */
}

.testScreen-wrapper {
    max-width: 85vw;
    width: 100%;
    padding-top: 2%;
    position: relative;
}

.clockTimerWrapper {
    display: flex;
    justify-content: end;
}

.chartSpan-DivHolder {
    display: flex;
    justify-content: center;
}

.testBannerTxt {
    color: #F5F5F5;
    font-family: Open Sans;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 10px;
}

.testSubTxt {
    color: #F5F5F5;
    font-family: Open Sans;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.testScreenDivider {
    margin: 20px 0 20px 0;
}

.clock-img {
    margin-right: 15px;
    margin-top: -5px;
}

.download {
    cursor: pointer;
}

.optionsWrapper {
    border-radius: 30px;
    border: 2px solid rgba(75, 154, 250, 0.3);
    padding: 2%;
}

.passedWrapper {
    display: flex;
    justify-content: end;
    height: 100%;
    align-items: end;
}

.options-margin {
    margin: 0 0 20px 0;
}

.nextBtn {
    border-radius: 60px;
    background: #4B9AFA;
    color: #FFF;
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    width: 168px;
    height: 68px;
}

.passed-failed {
    color: #F5F5F5;
    font-family: Open Sans;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}



.stepsHead {
    color: #F5F5F5;
    font-family: Open Sans;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 5% !important;
}

.stepsHead-span {
    color: #4B9AFA;
    font-weight: 700;
}

.btnDivWrapper {
    padding-top: 20px;
    display: flex;
    justify-content: end;
}

.skipBtn {
    border-radius: 60px;
    border: 2px solid #4B9AFA;
    color: #4B9AFA;
    background: transparent;
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    width: 168px;
    height: 68px;
    margin: 0 10px;
}

.testCompletedDiv {
    margin: auto 0;
}

.testCompletedTtxt {
    font-size: 300%;
}

.spantag {
    color: #4B9AFA;
}</style>
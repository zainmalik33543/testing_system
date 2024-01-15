<template>
    <div class="outerMostDiv-Review">
        <!-- <div class="expansionWrapper"> -->
        <div class="expansionWrapper">
            <div class="headingWrapper" v-motion :initial="{ opacity: 0 }"
                :enter="{ opacity: 1, transition: { duration: 300, delay: 200, ease: 'easeIn' } }">
                <h1 class="reviewHeading">Review <span class="reviewHeading-span">Questions</span></h1>
                <p class="reviewSubPara">Follow the required 4 steps to start you journey...</p>
                <v-divider class="divider"></v-divider>
            </div>
        </div>
        <div class="expansionWrapper">


            <v-expansion-panels color="#00102C" class="my-4 expensionQuestion">
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        Q.1) What is an array?
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <div style="color: white;">
                            <v-radio-group v-model="radioValue2">
                                <v-row class="questionRow">
                                    <v-col cols="12" sm="12" lg="6" md="6"><v-radio color="#4B9AFA"
                                            label="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                            value="option1"></v-radio>
                                        <v-radio color="#4B9AFA"
                                            label="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                            value="option2"></v-radio></v-col>
                                    <v-col cols="12" sm="12" lg="6" md="6"> <v-radio color="#4B9AFA"
                                            label="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                            value="option3"></v-radio>
                                        <v-radio color="#4B9AFA"
                                            label="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                            value="option4"></v-radio></v-col>
                                </v-row>
                            </v-radio-group>
                        </div>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
            <v-expansion-panels color="#00102C" class="my-4 expensionQuestion">
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        Q.1) What is an array?
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <div style="color: white;">
                            <v-radio-group v-model="radioValue2">
                                <v-row class="questionRow">
                                    <v-col cols="12" sm="12" lg="6" md="6"><v-radio color="#4B9AFA"
                                            label="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                            value="option1"></v-radio>
                                        <v-radio color="#4B9AFA"
                                            label="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                            value="option2"></v-radio></v-col>
                                    <v-col cols="12" sm="12" lg="6" md="6"> <v-radio color="#4B9AFA"
                                            label="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                            value="option3"></v-radio>
                                        <v-radio color="#4B9AFA"
                                            label="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                            value="option4"></v-radio></v-col>
                                </v-row>
                            </v-radio-group>
                        </div>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
            <v-expansion-panels color="#00102C" class="my-4 expensionQuestion">
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        Q.1) What is an array?
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <div style="color: white;">
                            <v-radio-group v-model="radioValue2">
                                <v-row class="questionRow">
                                    <v-col cols="12" sm="12" lg="6" md="6"><v-radio color="#4B9AFA"
                                            label="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                            value="option1"></v-radio>
                                        <v-radio color="#4B9AFA"
                                            label="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                            value="option2"></v-radio></v-col>
                                    <v-col cols="12" sm="12" lg="6" md="6"> <v-radio color="#4B9AFA"
                                            label="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                            value="option3"></v-radio>
                                        <v-radio color="#4B9AFA"
                                            label="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                            value="option4"></v-radio></v-col>
                                </v-row>
                            </v-radio-group>
                        </div>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
            <v-expansion-panels color="#00102C" class="my-4 expensionQuestion">
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        Q.1) What is an array?
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <div style="color: white;">
                            <v-radio-group v-model="radioValue2">
                                <v-row class="questionRow">
                                    <v-col cols="12" sm="12" lg="6" md="6"><v-radio color="#4B9AFA"
                                            label="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                            value="option1"></v-radio>
                                        <v-radio color="#4B9AFA"
                                            label="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                            value="option2"></v-radio></v-col>
                                    <v-col cols="12" sm="12" lg="6" md="6"> <v-radio color="#4B9AFA"
                                            label="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                            value="option3"></v-radio>
                                        <v-radio color="#4B9AFA"
                                            label="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                            value="option4"></v-radio></v-col>
                                </v-row>
                            </v-radio-group>
                        </div>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
            <v-expansion-panels color="#00102C" class="my-4 expensionQuestion">
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        <p class="reviewQuestion">Q.1) What is an array?</p>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <div style="color: white;">
                            <v-radio-group v-model="radioValue2">
                                <v-row class="questionRow">
                                    <v-col cols="12" sm="12" lg="6" md="6"><v-radio color="#4B9AFA"
                                            label="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                            value="option1"></v-radio>
                                        <v-radio color="#4B9AFA"
                                            label="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                            value="option2"></v-radio></v-col>
                                    <v-col cols="12" sm="12" lg="6" md="6"> <v-radio color="#4B9AFA"
                                            label="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                            value="option3"></v-radio>
                                        <v-radio color="#4B9AFA"
                                            label="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                            value="option4"></v-radio></v-col>
                                </v-row>
                            </v-radio-group>
                        </div>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
            <v-expansion-panels color="#00102C" class="my-4 expensionQuestion">
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        Q.1) What is an array?
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <div style="color: white;">
                            <v-radio-group v-model="radioValue2">
                                <v-row class="questionRow">
                                    <v-col cols="12" lg="6" sm="12"  md="6"><v-radio color="#4B9AFA"
                                            label="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                            value="option1"></v-radio>
                                        <v-radio color="#4B9AFA"
                                            label="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                            value="option2"></v-radio></v-col>
                                    <v-col cols="12" sm="12" lg="6" md="6"> <v-radio color="#4B9AFA"
                                            label="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                            value="option3"></v-radio>
                                        <v-radio color="#4B9AFA"
                                            label="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                            value="option4"></v-radio></v-col>
                                </v-row>
                            </v-radio-group>
                        </div>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>

            <div class="reviewDivBtn">
                <router-link to="/start">
                    <v-btn class="nextBtn">NEXT</v-btn>
                </router-link>
            </div>
        </div>
        <div style="margin: 0 auto;" class="headingWrapper">
            <div>
                <FooterCom />
            </div>
        </div>
    </div>
</template>

<script>
import FooterCom from '../components/helperComponents/FooterCom.vue'
export default {
    data() {
        return {
            radioValue1: null,
            radioValue2: null,
        };
    },
    components: {
        FooterCom: FooterCom
    }

}
</script>

<style scoped>
.outerMostDiv-Review {
    background: #00102C;
    height: 100%;
    padding: 0 0 20px 0;
}

.reviewQuestion {
    color: #FFF;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
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

.divider {
    color: white;
    margin: 2% 0 3% 0;
}

.reviewHeading {
    color: #F5F5F5;
    font-family: Open Sans;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 5%;
}

.v-expansion-panel-title {
    color: #FFF;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.reviewHeading-span {
    color: #4B9AFA;
    font-weight: 700;

}

.reviewSubPara {
    color: #F5F5F5;
    font-family: Open Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.headingWrapper {
    width: 85vw;
}

.expansionWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.expensionQuestion {
    width: 85vw;

}
.questionRow{
    padding: 0 5%;
}

.expensionQuestion .v-expansion-panel {
    border-radius: 60px;
    border: 1px solid #4B9AFA;
    background-color: #00102C;
    /* opacity: 0.3; */
}

.v-expansion-panel-title__overlay {
    opacity: 0;
}

.v-expansion-panel .v-expansion-panel-text {
    background-color: rgb(0, 0, 0) !important;
}

.headingWrapper {
    width: 85vw;
}

.v-expansion-panel .v-expansion-panel-text[data-v-32340455] {
    background-color: #00102C !important;
    border-radius: 0 0 60px 60px;
    /* border-left: 1px solid #4B9AFA; */
}

.v-expansion-panel-title {
    background-color: #00102C;
    color: white;
    min-height: 70px;

}

.reviewDivBtn {
    display: flex;
    justify-content: end;
    width: 100%;
    max-width: 85vw;
}

button .v-expansion-panel-title__overlay {
    opacity: 0 !important;
}
</style>
<style>
button .v-expansion-panel-title__overlay {
    opacity: 0 !important;
}
</style>
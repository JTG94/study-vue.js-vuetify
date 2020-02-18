<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout
      justify-center
      wrap
    >
      <v-layout
        row
      >
        <v-flex
          xs2
        >
          <material-chart-card
            :data="emailsSubscriptionChart.data"
            :options="emailsSubscriptionChart.options"
            :responsive-options="emailsSubscriptionChart.responsiveOptions"
            color="purple"
            type="Pie"
          >
            <h4 class="title font-weight-light">팀 내 나의 순위</h4>
            <p class="category d-inline-flex font-weight-light"> <span class="green--text">2 / 12</span>&nbsp;</p>

            <template slot="actions">
              <v-icon
                class="mr-2"
                small
              >
                mdi-clock-outline
              </v-icon>
              <span class="caption grey--text font-weight-light">updated 10 minutes ago</span>
            </template>
          </material-chart-card>
        </v-flex>
        <v-flex
          xs2
        >
          <material-chart-card
            :data="emailsSubscriptionChart.data"
            :options="emailsSubscriptionChart.options"
            :responsive-options="emailsSubscriptionChart.responsiveOptions"
            color="red"
            type="Bar"
          >
            <h4 class="title font-weight-light">나 vs 가비아</h4>
            <p class="category d-inline-flex font-weight-light">
              <v-icon
                color="red"
                small
              >
                mdi-arrow-down
              </v-icon>
            <span class="red--text">-200시간</span>&nbsp;</p>
            <template slot="actions">
              <v-icon
                class="mr-2"
                small
              >
                mdi-clock-outline
              </v-icon>
              <span class="caption grey--text font-weight-light">updated 10 minutes ago</span>
            </template>
          </material-chart-card>
        </v-flex>
        <v-flex
          xs2
        >
          <material-chart-card
            :data="emailsSubscriptionChart.data"
            :options="emailsSubscriptionChart.options"
            :responsive-options="emailsSubscriptionChart.responsiveOptions"
            color="green"
            type="Pie"
          >
            <h4 class="title font-weight-light">나의 관심분야</h4>
            <p class="category d-inline-flex font-weight-light"> <span class="green--text">최고 관심 : Spring</span>&nbsp;</p>

            <template slot="actions">
              <v-icon
                class="mr-2"
                small
              >
                mdi-clock-outline
              </v-icon>
              <span class="caption grey--text font-weight-light">updated 10 minutes ago</span>
            </template>
          </material-chart-card>
        </v-flex>
        <v-flex
          xs5
        >
          <material-chart-card
            :data="myEducationMonthlyChart.data"
            :options="myEducationMonthlyChart.options"
            :responsive-options="myEducationMonthlyChart.responsiveOptions"
            color="info"
            type="Line"
          >
            <h4 class="title font-weight-light">2020 월별 나의 교육시간 추이</h4>
            <p class="category d-inline-flex font-weight-light"> <span class="green--text">전달 대비 23% 증가</span>&nbsp;</p>

            <template slot="actions">
              <v-icon
                class="mr-2"
                small
              >
                mdi-clock-outline
              </v-icon>
              <span class="caption grey--text font-weight-light">updated 10 minutes ago</span>
            </template>
          </material-chart-card>
        </v-flex>
        <v-flex
          xs2
        >
          <material-card class="v-card-profile">
            <v-avatar
              slot="offset"
              class="mx-auto d-block"
              size="120"
            >
              <img
              >
            </v-avatar>
            <v-card-text class="text-xs-center">
              <h6 class="category text-gray font-weight-thin mb-3">인턴 / HR인사팀</h6>
              <h4 class="card-title font-weight-light">정태균(Thor)</h4>
              <!-- <h6 class="category text-gray font-weight-thin mb-3">email : jtk@gabia.com</h6>
              <h6 class="category text-gray font-weight-thin mb-3">gender : man</h6>
              <h6 class="category text-gray font-weight-thin mb-3">phone : 010-9100-0000</h6>
              <h6 class="category text-gray font-weight-thin mb-3">tel : 031-714-5555</h6> -->
              <v-btn
                color="success"
                round
                class="font-weight-light"
              >상세 보기</v-btn>
            </v-card-text>
          </material-card>
        </v-flex>
      </v-layout>
      <v-flex
        md12
      >
        <material-card
          color="blue"
          title="My Educations"
          text="나의 교육 현황 리스트"
        >
          <v-data-table
            :headers="headers"
            :items="items"
            hide-actions
          >
            <template
              slot="headerCell"
              slot-scope="{ header }"
            >
              <span
                class="subheading font-weight-light text-success text--darken-3"
                v-text="header.text"
              />
            </template>
            <template
              slot="items"
              slot-scope="{ item }"
            >
              <td>{{ item.title }}</td>
              <td>{{ item.startDate[0] + '-' + item.startDate[1] + '-' +item.startDate[2] }}</td>
              <td>{{ item.endDate[0] + '-' + item.endDate[1] + '-' +item.endDate[2] }}</td>
              <td>{{ item.totalHours }}</td>
              <td>{{ item.type }}</td>
              <td>{{ item.place }}</td>
              <td>{{ item.category.name }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
      <router-link to="/user-profile"><v-btn
        color="success"
        round
        class="font-weight-light"
      >교육 작성</v-btn></router-link>
    </v-layout>
  </v-container>
</template>

<script>
import { fetchMyEduList } from '../api/index.js'

export default {
  data () {
    return {
      headers: [
        {
          sortable: false,
          text: '교육명',
          value: 'title'
        },
        {
          sortable: false,
          text: '시작날짜',
          value: 'startDate'
        },
        {
          sortable: false,
          text: '종료날짜',
          value: 'endDate'
        },
        {
          sortable: false,
          text: '시간',
          value: 'totalHours'
        },
        {
          sortable: false,
          text: '교육유형',
          value: 'type'
        },
        {
          sortable: false,
          text: '장소',
          value: 'place'
        },
        {
          sortable: false,
          text: '카테고리',
          value: 'category'
        }
      ],
      items: [],
      emailsSubscriptionChart: {
        data: {
          labels: ['나', 'Gabia'],
          series: [
            [120, 320]
          ]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 500,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [
          ['screen and (max-width: 120px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0]
              }
            }
          }]
        ]
      },
      myEducationMonthlyChart: {
        data: {
          labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
          series: [
            [120, 320, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          ]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 500,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [
          ['screen and (max-width: 500px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0]
              }
            }
          }]
        ]
      }
    }
  }
}
</script>

<template>
  <v-form
    ref="form">
    <v-container
      fill-height
      fluid
      grid-list-xl>
      <v-layout
        justify-center
        wrap
      >
        <v-flex
          xs12
          md8
        >
          <material-card
            color="green"
            title="나의 교육 입력"
            text="Register your education"
          >
            <v-form>
              <v-container py-0>
                <v-layout wrap>
                  <v-flex
                    xs12
                    md8
                  >
                    <v-text-field
                      v-model="title"
                      :rules="[v => !!v || '교육 명은 필수 입력사항입니다']"
                      label="교육 명(TITLE)"
                      hint="교육 명을 입력해주세요."
                      class="purple-input"
                      required
                    />
                  </v-flex>
                  <v-flex
                    xs12
                    md4
                  >
                    <v-select
                      v-model="category"
                      :items="categoryList"
                      label="카테고리(Category)"
                      hint=""
                      class="purple-input"
                      prepend-icon="mdi-animation"
                      item-text="name"
                      item-value="id"
                      required
                      chips
                    />
                  </v-flex>
                  <v-flex
                    xs12
                    md12
                  >
                    <v-textarea
                      v-model="content"
                      label="교육 내용(CONTENTS)"
                      rows="15"
                      hint="교육 내용을 입력해주세요."
                    />
                  </v-flex>
                  <v-flex
                    xs12
                    md6
                  >
                    <v-text-field
                      v-model="hashTag"
                      label="해시태그(HashTag)"
                      hint="해시태그를 입력해주세요. ex) #Spring #HTML"
                      prepend-icon="mdi-tag"
                    />
                  </v-flex>
                  <v-flex
                    xs12
                    md3
                  >
                    <v-text-field
                      v-model="place"
                      label="교육장소(Place)"
                      hint="교육장소를 입력해주세요."
                      prepend-icon="mdi-map-marker"
                    />
                  </v-flex>
                  <v-flex
                    xs12
                    md3
                  >
                    <v-select
                      v-model="type"
                      :items="edutypeList"
                      :rules="[v => !!v || '교육 유형은 필수 입력사항입니다']"
                      label="교육유형"
                      hint=""
                      class="purple-input"
                      prepend-icon="mdi-animation"
                      item-text="name"
                      required
                      chips
                    />
                  </v-flex>
                  <v-flex
                    xs12
                    md5
                  >
                    <v-menu
                      ref="startDate"
                      :close-on-content-click="false"
                      v-model="startDate"
                      :nudge-right="40"
                      :return-value.sync="sdate"
                      lazy
                      transition="scale-transition"
                      offset-y
                      full-width
                      min-width="60px"
                    >
                      <v-text-field
                        slot="activator"
                        v-model="sdate"
                        :rules="[v => !!v || '시작날짜는 필수 입력사항입니다']"
                        class="purple-input"
                        label="교육 시작날짜(startDate)"
                        readonly
                        required
                        prepend-icon="mdi-calendar"
                      />
                      <v-date-picker
                        v-model="sdate"
                        @input="$refs.startDate.save(sdate)"/>
                    </v-menu>
                  </v-flex>
                  <v-flex
                    xs12
                    md5
                  >
                    <v-menu
                      ref="endDate"
                      :close-on-content-click="false"
                      v-model="endDate"
                      :nudge-right="40"
                      :return-value.sync="edate"
                      lazy
                      transition="scale-transition"
                      offset-y
                      full-width
                      min-width="60px"
                      color="black--text"
                    >
                      <v-text-field
                        slot="activator"
                        v-model="edate"
                        class="purple-input"
                        label="교육 종료날짜(endDate)"
                        readonly
                        required
                        prepend-icon="mdi-calendar"
                      />
                      <v-date-picker
                        v-model="edate"
                        @input="$refs.endDate.save(edate)"/>
                    </v-menu>
                  </v-flex>
                  <v-flex
                    xs12
                    md2
                  >
                    <v-text-field
                      v-model="totalHours"
                      :rules="totalHoursRules"
                      type="number"
                      class="purple-input"
                      label="총 교육시간"
                      hint="교육시간을 입력해주세요. (숫자만 입력가능)"
                      required
                      prepend-icon="mdi-timer"
                    />
                  </v-flex>
                  <v-flex
                    xs12
                    text-xs-right
                  >
                    <!-- <v-slide-x-reverse-transition>
                      <v-tooltip
                        v-if="formHasErrors"
                        left
                      >
                        <v-btn
                          slot="activator"
                          icon
                          class="my-0"
                          @click="resetForm"
                        >
                          <v-icon color="blue">mdi-autorenew</v-icon>
                        </v-btn>
                        <span>초기화</span>
                      </v-tooltip>
                    </v-slide-x-reverse-transition> -->
                    <v-btn
                      class="mx-1 font-weight-light"
                      color="success"
                      @click="submit"
                    >
                      <v-icon>mdi-check</v-icon>
                      등록
                    </v-btn>
                    <v-btn
                      class="mx-0 font-weight-light"
                      color="info"
                      @click="back"
                    >
                      <v-icon>mdi-arrow-left</v-icon>
                      목록으로
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-form>
          </material-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import { getCategoryList, postEducation } from '../api/index.js'

export default {
  data () {
    return {
      title: '',
      category: null,
      content: '',
      hashTag: '',
      place: '',
      type: null,
      totalHours: '',
      totalHoursRules: [
        v => !!v || '교육시간은 필수 입력사항입니다.',
        v => (v && v > 0) || '0보다 큰값을 입력해주세요.'
      ],
      sdate: null,
      edate: null,
      startDate: false,
      endDate: false,
      categoryList: [],
      edutypeList: ['ONLINE', 'OFFLINE']
    }
  },
  created () {
    var vm = this
    getCategoryList()
      .then(function (response) {
        vm.categoryList = response.data.response
      })
      .catch(error => console.log(error))
  },
  methods: {
    submit () {
      var educations = {
        title: this.title,
        content: this.content,
        startDate: this.sdate,
        endDate: this.edate,
        totalHours: this.totalHours,
        type: this.type,
        place: this.place,
        categoryId: this.category,
        hashTag: this.hashTag,
        userId: '1783'
      }
      postEducation(educations)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error)
          alert('값을 정확히 입력해주세요.')
        })
    },
    back () {
      history.back()
    }
  }
}
</script>

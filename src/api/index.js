import axios from 'axios'

const config = {
  baseUrl: 'http://localhost:8080/api/v1/'
}
// 사용자 교육 등록
function postEducation(educations) {
  return axios.post(`${config.baseUrl}educations`, educations)
}

// 사용자의 교육 리스트를 요청
function getMyEducationList(userId) {
  return axios.get(`${config.baseUrl}users/${userId}/educations`)
}
// 사용자 교육 상세 요청
function getMyEducationItem(educationId) {
  return axios.get(`${config.baseUrl}educations/${educationId}`)
}
// 사용자 교육 단건 삭제 요청
function deleteMyEducationItem(educationId) {
  return axios.delete(`${config.baseUrl}educations/${educationId}`)
}
// 사용자 교육 단건 수정 요청
function putMyEducationItem(educationId, editedEducation) {
  return axios.put(`${config.baseUrl}educations/${educationId}`, editedEducation)
}
// 카테고리 목록 요청
function getCategoryList() {
  return axios.get(`${config.baseUrl}categories`)
}

export {
  postEducation,
  getMyEducationList,
  getMyEducationItem,
  deleteMyEducationItem,
  putMyEducationItem,
  getCategoryList
}

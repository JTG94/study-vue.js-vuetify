/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '',
    name: 'DashBoard',
    view: 'Dashboard'
  },
  {
    path: '/myEducation',
    name: 'My Education',
    view: 'MyEducation'
  },
  {
    path: '/myEducation/register',
    name: 'Education Register',
    view: 'EducationForm'
  },
  {
    path: '/myEducation/:educationId/edit',
    name: 'Education Edit',
    view: 'EducationForm'
  },
  {
    path: '/myEducation/:educationId',
    name: 'Education Detail',
    view: 'EducationDetail'
  },
  {
    path: '/userProfile',
    name: 'User Profile',
    view: 'UserProfile'
  },
  {
    path: '/userProfile/edit',
    name: 'Profile Edit',
    view: 'ProfileForm'
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    view: 'UserProfile'
  },
  {
    path: '/table-list',
    name: 'Table List',
    view: 'TableList'
  },
  {
    path: '/typography',
    view: 'Typography'
  },
  {
    path: '/icons',
    view: 'Icons'
  },
  {
    path: '/maps',
    view: 'Maps'
  },
  {
    path: '/notifications',
    view: 'Notifications'
  },
  {
    path: '/upgrade',
    name: 'Upgrade to PRO',
    view: 'Upgrade'
  }
]

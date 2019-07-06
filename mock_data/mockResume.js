module.exports = {
  meta: {
    name: 'mock resume',
    description:
      'This is a mock resume, structurally somewhat (but not fully) based on the JSON Resume schema (https://jsonresume.org)'
  },
  basics: {
    name: 'Inese Avota',
    label: 'Software Engineer',
    image: '',
    email: 'some.invalidemail@someemail.com',
    phone: '+44 444 4444 444',
    url: '',
    summary:
      'Software engineer trying to build a cv template... Software engineer trying to build a cv template... Software engineer trying to build a cv template... Software engineer trying to build a cv template... Software engineer trying to build a cv template... Software engineer trying to build a cv template... Software engineer trying to build a cv template... Software engineer trying to build a cv template... Software engineer trying to build a cv template... ',
    location: {
      address: '',
      postalCode: '',
      city: '',
      countryCode: '',
      region: ''
    },
    profiles: [
      {
        network: 'Linkedin',
        username: '',
        url: 'https://www.linkedin.com/in/something-totallyinvalid'
      },
      {
        network: 'GitHub',
        username: 'something-totallyinvalid',
        url: 'https://github.com/something-totallyinvalid'
      }
    ]
  },
  work: [
    {
      name: 'Lorem Ipsum',
      location: 'London, UK',
      description: '',
      position: 'JavaScript Developer',
      url: '',
      startDate: '2016-03-01',
      endDate: '2018-12-01',
      summary: '',
      highlights: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        'Tempor incididunt ut labore et dolore magna aliqua',
        'Ut enim ad minim veniam, quis nostrud exercitation',
        'Ullamco laboris nisi ut aliquip',
        'ex ea commodo consequat',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat'
      ]
    },
    {
      name: 'Dolor Sit Amet',
      location: 'Helsinki, FI',
      description: '',
      position: 'Softare Engineer',
      url: '',
      startDate: '2014-05-01',
      endDate: '2016-09-01',
      summary: '',
      highlights: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
        'Tempor incididunt ut labore et dolore magna aliqua',
        'Ullamco laboris nisi ut aliquip',
        'ex ea commodo consequat'
      ]
    }
  ],
  education: [
    {
      institution: 'University of Loremipsum',
      area: 'Software Engineering',
      studyType: 'Undergraduate',
      startDate: '2011-06-01',
      endDate: '2014-01-01',
      gpa: '4.5',
      courses: []
    }
  ],
  languages: [
    {
      name: 'English',
      fluency: 'fluent'
    },
    {
      name: 'German',
      fluency: 'intermediate'
    }
  ],
  certificates: [
    {
      name: 'Google Cloud Platform basics',
      date: 'June 2018'
    }
  ],
  skills: ['Java', 'JavaScript', 'HTML5', 'CSS3', 'Node.js', 'Pancakes', ''],
  interests: ['cats', 'memes', 'philosophising']
}

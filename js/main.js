const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    modal: true,
    width: '50%',
    height: '400px',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('rgba(0, 0, 0, 0.7)')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    modal: true,
    width: '50%',
    height: '400px',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('rgba(0, 0, 0, 0.7)')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

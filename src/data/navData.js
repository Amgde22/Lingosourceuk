const navData = [
  {
    key: "home",
    url: "/",
    children: []
  },
  {
    key: "about",
    url: "/about",
    children: []
  },
  {
    key: "contact",
    url: "/contact",
    children: []
  },
  {
    key: "pricing",
    children: [
      {
        key: "hire an agent pricing",
        url: "/dedicated-agent-pricing"
      },
      {
        key: "phone answering service pricing",
        url: "/phone-answering-serive-pricing"
      }
    ]
  },
  {
    key: "more",
    children: [
      {
        key: "how it works",
        url: "/how-it-works"
      },
      {
        key: "blog",
        url: "/blog"
      }
    ]
  },
  {
    key: "call answering service",
    url: "/call-answering-service",
    special:true,
    children: []
  },
]
export default navData
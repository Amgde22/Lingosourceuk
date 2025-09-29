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
    key: "projects",
    children: [
      {
        key: "project-1",
        url: "/projects/project-1/"
      },
      {
        key: "project-2",
        url: "/projects/project-2/"
      }
    ]
  },
  {
    key: "blog",
    url: "/blog",
    children: []
  },
  {
    key: "Pricing",
    url: "/pricing",
    children: []
  },
  {
    key: "contact",
    url: "/contact-us",
    children: []
  },
]
export default navData
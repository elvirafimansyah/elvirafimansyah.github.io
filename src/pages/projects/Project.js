import { useEffect } from "react"
import Main from "../../layouts/Main";
import Title from "../../components/Title";
import TabItem from "./Tabs";

export default function ProjectsIndex() {
  useEffect(function () {
    document.title = 'Projects | Elvira Firmansyah';
  }, []);
  return (
    <>
      <Main>
        <Title
          title="Projects"
          url1="https://github.com/elvirafimansyah"
          url2="https://dribbble.com/ElviraFir"
          status1="Github"
          status2="Dribbble"
          dp="A few highlights of my open-source projects. View them all on"
        />
        <TabItem mb={"20"} />
      </Main>
    </>
  )
}

const ProjectContent = () => {
  return (
    <>
      <Title
        title="Projects"
        url="https://github.com/elvirafimansyah"
        status="Dribbble"
        dp="A few highlights of my open-source projects. View them all on"
      />
      <TabItem  />
    </>
  )
}

export { ProjectContent }
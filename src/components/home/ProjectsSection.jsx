import { Swiper,SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import projects from '../../data/projects'
import Title from '../Title'
import ProjectItem from './ProjectItem';

const ProjectsSection = () => {
  return (
    <section className='md:pt-32 pt-24'>
      <Title className="text-center">Recent Works</Title>
      <div className='flex mt-10'>
        <Swiper modules={[Navigation]}
        slidesPerView={1} spaceBetween={30} navigation
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          // when window width is >= 1200px
          1200: {
            slidesPerView: 3,
          },
        }}
        >
          {
            projects.map((project,index) => {
              if(index >= 5) return;
              return (
                <SwiperSlide key={project.name}>
                  <ProjectItem name={project.name} img={project.img} tech={project.tech} workUrl={project.workUrl} demoUrl={project.demoUrl} />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </section>
  )
}

export default ProjectsSection
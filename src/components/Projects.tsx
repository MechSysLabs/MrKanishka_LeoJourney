import { ImageWithFallback } from './routes/ImageWithFallback';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Calendar, Users, Award } from 'lucide-react';
import leoEventImage from 'figma:asset/c78c72761d3642d37280b811c2ee9647eaa29f07.png';

const projects = [
  {
    title: "LEO Club President ",
    date: "2023 - 2024",
    description: "Drove the club to immediate and recognized excellence during the first year of my presidency. Successfully led the club to be named the Highest Recognized New Club in Leo District 306 B2, setting a definitive benchmark for performance and impact within the District.",
    team: "Team Members",
    recognition: "Lions Excellence Award",
    tags: ["Strategy", "Leadership", ],
    image: "src/assets/e6da6bd7b38c2cce749b210e083242866173fb49.png",
    featured: true
  },
  {
    title: "The Best New Leo Club Of the Year Award",
    date: "2023",
    description: "Best New Leo Club of the year. As a Club as a newly installed Leo club of best award Archived.",
    team: "Team Archivement",
    recognition: "Managment Excellence ",
    tags: ["Hard Work", "Commitment", "Strategy"],
    image: "src/assets/2024 june.png",
    featured: false
  },
  {
    title: "Leo Walk",
    date: "2022 ~ 2024",
    description: "The Leo Walk stands as a testament to the transformative power of youth-led service. Our biennial walkathon, notably successful in 2022, 2023 and 2024.",
    impact: " ",
    team: "Excelelent Runtime",
    recognition: "2000+ Participants",
    tags: ["Community Service", "Youth Development", "Fundraising"],
    image: "src/assets/walk22&24.png",
    featured: false
  },
  {
    title: "Leo Gatherings",
    date: "2021",
    description: "A snapshot of the Leo Club of Leo moments, featuring members engaged in diverse community service projects and vibrant social and fellowship activities.",
    impact: "",
    team: "Growing",
    recognition: "Good Memories",
    tags: ["Coordinating","Outdoor Fellowship", "Fun Times"],
    image: "src/assets/2021leo.jpg",
    featured: false
  }
];

export function Projects() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Pride-Worthy <span className="text-cyan-600">Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Like a lion's roar echoes across the savanna, these projects have made lasting 
            impacts that resonate throughout the industry and beyond.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card key={project.title} className={`overflow-hidden ${project.featured ? 'ring-2 ring-cyan-200 shadow-xl' : 'shadow-lg'} hover:shadow-2xl transition-all duration-300`}>
              <div className={`grid ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-0`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                
                <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-cyan-600" />
                      <span className="text-cyan-600 font-semibold">{project.date}</span>
                      {project.featured && (
                        <Badge className="bg-cyan-600 text-white ml-2">Featured</Badge>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 text-lg mb-6">{project.description}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-cyan-600" />
                      <span className="text-gray-700">{project.team}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="w-4 h-4 text-cyan-600" />
                      <span className="text-gray-700">{project.recognition}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-cyan-100 text-cyan-800">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                 
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
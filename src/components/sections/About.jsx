export const About = () => {

    const frontendSkills = ["React","CSS","TailwindCSS"];

    const backendSkills = ["Javascript","PHP","NodeJS","Python","Java","MySQL","SQLServer","MongoDB"]

    const cloudSkills = ["Azure","Azure VMs", "Azure Data Storage"]


    const otherSkills = ["Windows Server","Linux","DLP","IPTables"]
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6"> I'm always exploring new tools, best practices, and smarter ways to build solutions.
                     </p>
                     <p>
                        
                     </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key)=>(
                                    <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"> 

                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key)=>(
                                    <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"> 

                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Cloud</h3>
                            <div className="flex flex-wrap gap-2">
                                {cloudSkills.map((tech, key)=>(
                                    <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"> 

                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                       
                    </div>
                    <p>
                    In addition to my programming skills, I have experience working with Azure and Linux/Windows Servers, 
                     which allows me to deliver Software that is also reliable and secure in complex environments.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                    <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                         
                            <div className="flex flex-wrap gap-2">
                                {otherSkills.map((tech, key)=>(
                                    <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"> 

                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Education</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>
                                        <strong>B.S. in Computer Science</strong> - Instituto Politécnico Nacional (2019-2023)
                                    </li>
                                
                                </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Courses and Certifications</h3>
                                 <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>
                                         Microsoft Certified Azure AZ-900
                                    </li>
                                    <li>
                                        Introduction to Cybersecurity
                                    </li>
                                    <li>
                                         AI Fundamentals
                                    </li>
                                    </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
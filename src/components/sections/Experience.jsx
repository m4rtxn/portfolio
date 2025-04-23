export const Experience = () => {


    return(

        <section id="experience" className="min-h-screen flex-items-center justify-center py-20">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              Work  Experience
            </h2>


            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">IT Specialist at Transsion</h3>

                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                            Design and implementation of procedures for IT asset control and management
                            </li>
                            <li>
                            Implementation of security policies and access control on devices
                            </li>
                            <li>
                            Design and implementation of SLAs for IT services
                            </li>
                            <li>
                            Server administration, firewalls, Access Points, and biometric systems
                            </li>
                            <li>
                            On-site and remote support for troubleshooting
                            </li>
                        </ul>
            </div>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all my-4">
                  <h3 className="text-xl font-bold mb-4">Systems Engineer at CIMESA</h3>

                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                Active Directory Management
                            </li>
                            <li>
                            MDM migration and configuration with Intune: Carried out the migration to Microsoft Intune and configured mobile device management (MDM) policies
                            </li>
                            <li>
                                Migration of data and services to Microsoft Azure
                            </li>
                            <li>
                            VPN configuration: Implemented and managed secure VPN connections for remote access to the corporate network
                            </li>
                            <li>
                            Network administration: Managed network infrastructure, ensuring optimal performance and availability
                            </li>
                           
                        </ul>
            </div>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all my-4">
                  <h3 className="text-xl font-bold mb-4">Web Developer at ESVIM</h3>

                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                            Requirements analysis: Collaborated with cross-functional teams to define and document technical and functional requirements, ensuring solutions aligned with client expectations
                            </li>
                            <li>
                            Full-stack development: Contributed to both front-end and back-end development, ensuring seamless integration between components of the application                            </li>
                            <li>
                            API testing and integration: Implemented API integrations to enable communication with external systems; performed testing using Postman                            </li>
                            <li>
                            System and admin panel development: Developed a web platform and administration panel using React Hooks and a component-based architecture to build modular, reusable, and scalable user interfaces                            </li>
                            <li>
                            Database design and management: Designed and managed SQL databases, ensuring performance, scalability, and data security according to project needs                            </li>
                           
                        </ul>
            </div>
        </div>
            </section>
    )
}
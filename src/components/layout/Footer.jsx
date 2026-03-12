export function Footer() {
    return (
        <footer className="bg-background-secondary border-t border-stroke p-5 py-10 justify-center flex w-full">
            <div className="max-w-308 w-full">
                <div className="flex justify-between items-center flex-wrap gap-6">
                    <div>
                        <p>Jose Francisco Sequeira Mendoza</p>
                        <p className="text-terciary text-base">UI/UX Designer & Frontend Developer</p>
                    </div>
                    <ul className="flex space-x-4 text-secondary uppercase font-medium gap-3">
                        <li className="hover:text-foreground">
                            <a href="mailto:jose.sequeiramendoza@ucr.ac.cr"
                                target="_blank"
                                rel="noopener noreferrer">Email</a>
                        </li>
                        <li className="hover:text-foreground">

                            <a href="https://www.linkedin.com/in/francisco-sequeira-mendoza/"
                                target="_blank"
                                rel="noopener noreferrer">LinkedIn</a>

                        </li>
                    </ul>
                </div>
                <div className="border border-stroke w-full mt-8 mb-8"></div>
                <div>
                    <p className="text-terciary text-sm text-center">© 2026 Developed using React, Tailwind CSS and Framer. Designed with accessibility and usability in mind.</p>
                </div>
            </div>
        </footer>

    )
}
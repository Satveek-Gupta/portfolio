import { motion } from "framer-motion";
import {
    SiVisualstudiocode,
    SiGit,
    SiDocker,
    SiIntellijidea,
    SiMysql,
    SiWebstorm,
    SiJavascript,
    SiTypescript,
    SiNodedotjs,
    SiAmazonaws,
    SiMongodb,
    SiReact,
    SiLinux,
    SiGrafana,
    SiSentry,
    SiGradle
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TechItem } from "../components/TechItem";
import RepoItem from "../components/RepoItem";

interface AppProps {
    stats: Record<string, number>;
    topRepos: Record<any, any>;
}

const Index = ({ stats, topRepos }: AppProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ease: "easeOut", duration: 0.15 }}
            className="mt-24 w-full mb-32"
        >
            <h1 className="mt-36 font-bold text-4xl md:text-5xl mb-4">Hey, I'm Satveek 👋</h1>
            <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-12">
                I'm a self-taught cloud engineer from India. As a Cloud Engineer, I am a highly skilled professional 
                dedicated to designing, implementing, and managing cloud-based solutions that empower businesses to 
                thrive in the digital era.
            </p>

            <h2 className="font-medium text-3xl mb-4">What I Do 💭</h2>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-12">
                I'm passionate about everything in technology; from designing and developing software, to understanding
                how the many moving parts of the internet work together, to cybersecurity, programming, and so much
                more. I strive to learn more about these things every day, and utilize my knowledge to further
                understand <i>how</i> or <i>why</i> the technology around us works.
            </p>

            <h2 className="font-medium text-3xl mb-4">Technologies 💻</h2>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-6">
                I use a variety of tools to streamline my development process and increase the quality of both my code,
                and my projects. Below is a list of technologies and languages I've had experience with in the past, or
                use currently.
            </p>
            <div className="w-full flex flex-wrap flex-row justify-center p-1 border border-slate-800 rounded-md bg-white/10 dark:bg-black/10 mb-12">
                <TechItem icon={FaJava} name="Java" />
                <TechItem icon={SiVisualstudiocode} name="VSCode" />
                <TechItem icon={SiIntellijidea} name="IntelliJ IDEA" />
                <TechItem icon={SiWebstorm} name="Web Storm" />
                <TechItem icon={SiMysql} name="MySQL" />
                <TechItem icon={SiJavascript} name="JavaScript" />
                <TechItem icon={SiTypescript} name="Typescript" />
                <TechItem icon={SiNodedotjs} name="Node.js" />
                <TechItem icon={SiAmazonaws} name="Amazon Web Services" />
                <TechItem icon={SiMongodb} name="MongoDB" />
                <TechItem icon={SiReact} name="React.js" />
                <TechItem icon={SiLinux} name="Linux" />
                <TechItem icon={SiGit} name="Git" />
                <TechItem icon={SiSentry} name="Sentry" />
                <TechItem icon={SiGrafana} name="Grafana" />
                <TechItem icon={SiDocker} name="Docker" />
                <TechItem icon={SiGradle} name="Gradle" />
            </div>

            <h2 className="font-medium text-3xl mb-4">Projects 🛠️</h2>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-6">
                In my free time, I enjoy creating open source projects on{" "}
                <a
                    href="https://github.com/Satveek-Gupta"
                    rel="noreferrer"
                    className="font-semibold text-violet-500 hover:underline"
                >
                    GitHub
                </a>
                , so I can learn from others and share what I know. In total, all of my open sourced projects have earnt
                me <span className="font-bold text-black dark:text-slate-200">{stats.stars}</span> stars on GitHub, and{" "}
                <span className="font-bold text-black dark:text-slate-200">{stats.forks}</span> forks. Below are some of
                my most popular repositories.
            </p>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mb-12 gap-2">
                {topRepos.map((repo: Record<string, any>) => {
                    return (
                        <RepoItem
                            key={repo.name}
                            name={repo.name}
                            description={repo.description}
                            stars={repo.stargazers_count}
                            forks={repo.forks_count}
                            language={repo.language}
                        />
                    );
                })}
            </div>
        </motion.div>
    );
};

export async function getStaticProps() {
    const stats = await fetch(`https://api.github-star-counter.workers.dev/user/Satveek-Gupta`).then(res => res.json());
    const repos = await fetch(`https://api.github.com/users/Satveek-Gupta/repos?type=owner&per_page=100`).then(res =>
        res.json()
    );

    // Ensure that 'repos' is an array
    const topRepos = Array.isArray(repos)
        ? repos
              .sort((a: { stargazers_count: number }, b: { stargazers_count: number }) => b.stargazers_count - a.stargazers_count)
              .slice(0, 4)
        : [];

    return {
        props: { stats, topRepos },
        revalidate: 3600,
    };
}

export default Index;

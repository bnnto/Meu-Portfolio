import styles from "../page.module.css"

const skills = [
  { name: "Python", src: "/python.svg" },
  { name: "Kotlin", src: "/kotlin.png" },
  { name: "Java", src: "/java.svg" },
  { name: "C++", src: "/c++.svg" },
  { name: "Django", src: "/django.png" },
  { name: "React.js", src: "/react.svg" },
  { name: "Node.js", src: "/node.svg" },
  { name: "Next.js", src: "/next.svg" },
  { name: "FastAPI", src: "/fastapi.svg" },
  { name: "Linux", src: "/linux.svg" },
  { name: "Git", src: "/git.svg" },
  { name: "Figma", src: "/figma.svg" },
  { name: "JavaScript", src: "/js.svg" },
  { name: "Raspberry Pi", src: "/raspb.svg" },
  { name: "C", src: "/cnormal.svg" },
  { name: "CSS", src: "/css.svg" },
];

export default function Skills(){
    return (
        <>
        <section id="habilidades">
            <div className={styles.skillsContainer}>
                <h1>habilidades</h1> 

                <div className={styles.quadradinhos}>
                    {skills.map((skill) => (
                        <div className={styles.quadradinho} key={skill.name}>
                            <img src={skill.src} />
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>           
            </div>
        </section>
        </>
    );
}
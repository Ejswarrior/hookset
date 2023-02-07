
import styles from '../home.module.scss'



export async function Home(){
    return(
        <div className={styles.postContainer}>
            <div className={styles.attribution}>
                <div className={styles.postProfile}>
                    <div className={styles.profileAttribute}></div>
                    <label className={styles.postUsername}>Username</label>
                </div>
                <button className={styles.postSettings}>...</button>
            </div>
    
        <span className={styles.postContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nihil eveniet adipisci mollitia debitis, aut iure a veniam quam magnam error quisquam natus accusantium aliquam dolores eius beatae. Sed necessitatibus maxime cumque explicabo perspiciatis exercitationem nobis quam dolorem, autem aperiam cum quidem non inventore sint impedit, accusamus voluptatibus quos eius mollitia corrupti maiores assumenda! Laborum consequuntur dolores dolore id, quos ex corrupti, placeat iste eveniet possimus harum nulla. Architecto maiores earum odit omnis corrupti. Tenetur unde in expedita numquam quia nemo earum fuga, facere commodi tempora nulla tempore itaque ex! Illum maiores corporis fugit magnam veniam sed quam animi officia.</span>
        <div className={styles.postIcons}>
            <p>0</p>
            <button className={styles.buttonComment}><i className={styles.iconComment}/></button>
            <p>0</p>
            <button className={styles.buttonLike}><i className={styles.iconLike}/></button>
        </div>
    </div>
    )
}


export default Home;
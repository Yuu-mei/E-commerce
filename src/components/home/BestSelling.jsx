import witcher3 from '../../assets/images/witcher3.jpg';
import Tag from '../products/Tags';

const BestSelling = () => {
    const tags = ["Adventure", "Survival", "WRPG", "GOTY"];

    return (
        <div className="card mb-3">
            <div className="row">
                <div className="col-md-8" style={{textAlign: 'start'}}>
                    <img src={witcher3} className="img-fluid rounded" alt="..."/>
                </div>
                <div className="col-md-4">
                    <div className="card-body">
                        <h5 className="card-title" style={{textAlign: 'center'}}>The Witcher 3</h5>
                        <div className="row">
                            {tags.map((tag) => {
                                return (
                                    <div className="col-6 text-center">
                                        <Tag tagName={tag}></Tag>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
        // <div className="row">
        //     <div className="col-12 col-md-8">
        //         <img src={witcher3} className="rounded img-thumbnail img-fluid" alt="" />
        //     </div>
        //     <div className="col-12 col-md-4">
        //         <div className="card">
        //             <div className="card-body">
        //                 <h5 className="card-title">The Witcher 3</h5>
        //                 <p className="card-text">
        //                 The most awarded game of 2015! Become a monster slayer for hire and embark on an epic journey to track down the child of prophecy, a living weapon capable of untold destruction. INCLUDES WITCHER 3: WILD HUNT, 16 FREE DLC AND HEARTS OF STONE AND BLOOD & WINE EXPANSIONS.
        //                 </p>
        //                 <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}
 
export default BestSelling;
import witcher3 from '../../assets/images/witcher3.jpg';
import Tag from '../products/Tags';
import Rating from '../products/Rating';

const BestSelling = () => {
    const tags = ["Adventure", "Survival", "WRPG", "GOTY"];

    return (
        // <div className="card text-bg-dark mb-3">
        //     <div className="row">
        //         <div className="col-md-8" style={{textAlign: 'start'}}>
        //             <img src={witcher3} className="img-fluid rounded" alt="..."/>
        //         </div>
        //         <div className="col-md-4">
        //             <div className="card-body d-flex flex-column">
        //                 <h5 className="card-title" style={{textAlign: 'center'}}>The Witcher 3</h5>
        //                 <div className="row">
        //                     {tags.map((tag) => {
        //                         return (
        //                             <div className="col-6 text-center" key={tag.toString()}>
        //                                 <Tag tagName={tag}></Tag>
        //                             </div>
        //                         )
        //                     })}
        //                 </div>
        //                 <p className="card-text py-3">Example text</p>
        //                 <div className="mt-auto">
        //                     <Rating rating="100"></Rating>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div class="card text-bg-dark mb-4">
            <div className="row">
                <div className="col-md-8" style={{textAlign: 'start'}}>
                        <img src={witcher3} className="img-fluid rounded" alt="..."/>
                </div>
                <div className="col-md-4">
                    <div class="card-body d-flex flex-column">
                        <h5 className="card-title" style={{textAlign: 'center'}}>The Witcher 3</h5>
                    </div>
                    <div className="row">
                        {tags.map((tag) => {
                            return (
                                <div className="col-6 text-center" key={tag.toString()}>
                                    <Tag tagName={tag}></Tag>
                                </div>
                            )
                        })}
                    </div>
                    <p className="card-text py-3">Example text</p>
                    <div className="mt-auto">
                        <Rating rating="100"></Rating>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default BestSelling;
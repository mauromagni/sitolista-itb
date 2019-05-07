import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const HomeFaq = (props) => {
	
    const isMobile = props.isMobile;
    const faqData = props.faqData;

    const buildFaq = (faqData) => {
        if (!faqData) {
            return
        }

        return (
            <div>
                {faqData.map( (faqElement) => {
                    return (
                        <div>
                            <div class={style.mobileFaqHeadline}>{faqElement.headline}</div>
                            <p class={style.mobileFaqParagraph}>{faqElement.paragraph}</p>
                        </div>
                    )
            } )}
            </div>
        )
    }

    if (isMobile) {
		return (
			<div class={style.mobileFaqCont}>
                <div>
                    <hr /> 
                    {buildFaq(faqData)}
                </div>
            </div>
		);
	  } else {
		return (
			<div class={style.dsktopFaqCont}>
                <hr /> 
				{buildFaq(faqData)}
			</div>
		);
	}
}

export default HomeFaq;

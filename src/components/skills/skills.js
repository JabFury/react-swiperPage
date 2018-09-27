import React, {Component} from 'react'
import '../../css/skills/skills.scss'

export default class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showJs: false,
            showCss: false,
            showOther: false,
        }
    }

    render() {
        let isCurrentPage = (this.props.currentNum === 3);
        let contentData = this.props.contentData;
        let isChinese = this.props.isChinese;
        let deviceName = this.props.deviceName;
        return (
            deviceName === 'mobile' ?
                <div className='skills_bg_mobile'>
                    <div className='bg_mobile'></div>
                    <div
                        className={['skills_title_mobile', isCurrentPage === true ? 'skills_title_mobile_active' : null].join(' ')}
                    >
                        <label>{isChinese === true ? '技能树' : 'Skills Tree'}</label>
                    </div>
                    <div className='skills_control_mobile'>
                        <div
                            className={['title_1_div_mobile', isCurrentPage === true ? 'title_1_div_mobile_active' : null].join(' ')}
                            onClick={() => {
                                this.setState({showJs: false, showCss: false, showOther: false})
                            }}
                        >
                            <label className='title_1_mobile'>
                                Web {isChinese === true ? '前端' : 'Front'}
                            </label>
                        </div>
                        <span
                            className={['skills_line_mobile line-1 ', isCurrentPage === true ? 'line-1_active' : null].join(' ')}
                            style={{top: '10vh', left: '50%'}}/>
                        <span
                            className={['skills_line_mobile line-2', isCurrentPage === true ? ' line-2_active' : null].join(' ')}
                            style={{top: '17vh', left: '50%'}}/>
                        <div
                            className={['title_2_div_mobile js_mobile', isCurrentPage === true ? 'other_mobile_active' : null].join(' ')}
                            onClick={() => {
                                this.setState({showJs: true, showCss: false, showOther: false})
                            }}
                        >
                            <label className='title_2_mobile'>JavaScript</label>
                        </div>
                        {
                            this.state.showJs === true ?
                                <div>
                                    <span className='skills_line_mobile' style={{top: '28vh', left: '50%'}}/>
                                    <span className='skills_line_mobile' style={{top: '35vh', left: '50%'}}/>
                                    <div className='title_2_div_mobile react_mobile'>
                                        <label className='title_2_mobile'>React</label>
                                    </div>
                                    <div className='skills_line_div_mobile' style={{width: '45vw', top: '35vh'}}></div>
                                    <div className='title_2_div_mobile vue_mobile'>
                                        <label className='title_2_mobile'>Vue</label>
                                    </div>
                                    <div className='title_2_div_mobile rn_mobile'>
                                        <label className='title_2_mobile'>RN</label>
                                    </div>
                                </div> : null
                        }


                        <div
                            className={['skills_line_div_mobile kuang-1', isCurrentPage === true ? ' kuang-1_active' : null].join(' ')}
                            style={{width: '75vw', top: '17vh'}}></div>
                        <div
                            className={['title_2_div_mobile other_mobile', isCurrentPage === true ? 'other_mobile_active' : null].join(' ')}
                            onClick={() => {
                                this.setState({showOther: true, showCss: false, showJs: false})
                            }}
                        >
                            <label className='title_2_mobile'>{isChinese === true ? '其他' : 'Other'}</label>
                        </div>
                        {
                            this.state.showOther === true ?
                                <div>
                                    <span className='skills_line_mobile' style={{top: '28vh', left: '13%'}}/>
                                    <span className='skills_line_mobile_heng' style={{top: '35vh', left: '12.7%'}}/>
                                    <span className='skills_line_mobile' style={{top: '35vh', left: '50%'}}/>
                                    <span className='skills_line_mobile' style={{top: '42vh', left: '50%'}}/>
                                    <div className='title_2_div_mobile axure_mobile'>
                                        <label className='title_2_mobile'>Adobe XD,Axure</label>
                                    </div>
                                    <div className='skills_line_div_mobile' style={{width: '65vw', top: '42vh'}}></div>
                                    <div className='title_2_div_mobile linux_mobile'>
                                        <label className='title_2_mobile'>Linux</label>
                                    </div>
                                    <div className='title_2_div_mobile git_mobile'>
                                        <label className='title_2_mobile'>git</label>
                                    </div>
                                </div> : null
                        }


                        <div
                            className={['title_2_div_mobile css_mobile', isCurrentPage === true ? 'other_mobile_active' : null].join(' ')}
                            onClick={() => {
                                this.setState({showCss: true, showJs: false, showOther: false})
                            }}
                        >
                            <label className='title_2_mobile'>css</label>
                        </div>
                        {
                            this.state.showCss === true ?
                                <div>
                                    <span className='skills_line_mobile' style={{top: '28vh', left: '87%'}}/>
                                    <span className='skills_line_mobile_heng' style={{top: '35vh', left: '50%'}}/>
                                    <span className='skills_line_mobile' style={{top: '35vh', left: '50%'}}/>
                                    <span className='skills_line_mobile' style={{top: '42vh', left: '50%'}}/>
                                    <div className='title_2_div_mobile xiang_mobile'
                                         style={isChinese === true ? {height: '4vh'} : {height: '8vh'}}>
                                        <label
                                            className='title_2_mobile'>{isChinese === true ? '响应式布局' : 'Responsive layout'}</label>
                                    </div>
                                    <div className='skills_line_div_mobile' style={{width: '65vw', top: '42vh'}}></div>
                                    <div className='title_2_div_mobile sass_mobile'>
                                        <label className='title_2_mobile'>Sass</label>
                                    </div>
                                    <div className='title_2_div_mobile antd_mobile'>
                                        <label className='title_2_mobile'>Antd,ElementUI,Bootstrap</label>
                                    </div>
                                </div> : null
                        }
                    </div>

                    <div className={['click_item_div', isCurrentPage === true ? 'click_item_div_active' : null].join(' ')}>
                        <label>{isChinese===true?'请点击每项':'Please Click Items'}</label>
                    </div>
                </div>
                :
                <div className='skills_bg'>
                    <div className='bg'>
                        <label
                            className={isChinese === true ? 'skills_title' : 'en_title'}>{isChinese === true ? '我所掌握的技能' : " I'm Skilled in"}</label>
                    </div>

                    <div className='skills_div'>
                        <div className='web_div'>
                            <div
                                className={['skills_line', isCurrentPage === true ? 'skills_line_top' : null].join(' ')}></div>
                            <label className='web_txt'>Web {isChinese === true ? '前端' : 'Front'}</label>
                            <div
                                className={['skills_line', isCurrentPage === true ? 'skills_line_bottom' : null].join(' ')}></div>
                            <div
                                className={['web_line_right', isCurrentPage === true ? 'web_line_right_move' : null].join(' ')}></div>
                        </div>


                        <div className={['double_title_div', isCurrentPage === true ? 'other_div' : null].join(' ')}>
                            <label className='double_txt'>{isChinese === true ? '其他' : 'Other'}</label>
                        </div>
                        <div
                            className={['skills_line_right', isCurrentPage === true ? 'linux_line_active' : null].join(' ')}>
                            <label
                                className={['skills_label', isCurrentPage === true ? 'linux_txt' : null].join(' ')}>Linux</label>
                        </div>


                        <div className={['double_title_div', isCurrentPage === true ? 'css_div' : null].join(' ')}>
                            <label className='double_txt'>HTML5 + CSS3</label>
                        </div>
                        <div
                            className={['skills_line_right', isCurrentPage === true ? 'sass_line_active' : null].join(' ')}>
                            <label
                                className={['skills_label', isCurrentPage === true ? 'linux_txt' : null].join(' ')}>Sass</label>
                        </div>


                        <div className={['double_title_div', isCurrentPage === true ? 'js_div' : null].join(' ')}>
                            <label className='double_txt'>JavaScript</label>
                        </div>
                        <div
                            className={['skills_line_right', isCurrentPage === true ? 'react_line_active' : null].join(' ')}>
                            <label
                                className={['skills_label', isCurrentPage === true ? 'react_txt' : null].join(' ')}>React.js</label>
                        </div>


                        <div className={['border_div ', isCurrentPage === true ? 'other_border_div' : null].join(' ')}>
                            <label
                                className={['skills_label ', isCurrentPage === true ? 'git_txt' : null].join(' ')}>git</label>
                            <label className={['skills_label ', isCurrentPage === true ? 'adobe_txt' : null].join(' ')}>Adobe
                                XD , Axure</label>
                        </div>
                        <div className={['border_div ', isCurrentPage === true ? 'js_border_div' : null].join(' ')}>
                            <label className={['skills_label ', isCurrentPage === true ? 'rn_txt' : null].join(' ')}>React
                                Native</label>
                            <label
                                className={['skills_label ', isCurrentPage === true ? 'vue_txt' : null].join(' ')}>Vue.js </label>
                        </div>
                        <div className={['border_div ', isCurrentPage === true ? 'css_border_div' : null].join(' ')}>
                            <label
                                className={['skills_label', isCurrentPage === true ? (isChinese === true ? 'xiang_txt' : 'en_label') : null].join(' ')}>{isChinese === true ? '响应式布局' : 'Responsive layout'}</label>
                            <label className={['skills_label ', isCurrentPage === true ? 'antd_txt' : null].join(' ')}>Antd
                                , ElementUI , BootStrap </label>
                        </div>


                        <div className='rn_inform_div'>
                            <label
                                className={[isChinese === true ? 'skills_inform_txt' : 'en_inform_txt', isCurrentPage === true ? 'inform_txt_active' : null].join(' ')}>
                                {contentData.rn}
                            </label>
                        </div>
                        <div className='react_inform_div'>
                            <label
                                className={[isChinese === true ? 'skills_inform_txt' : 'en_inform_txt', isCurrentPage === true ? 'inform_txt_active' : null].join(' ')}>
                                {contentData.reactTitle}
                            </label>
                        </div>
                        <div className='vue_inform_div'>
                            <label
                                className={[isChinese === true ? 'skills_inform_txt' : 'en_inform_txt', isCurrentPage === true ? 'inform_txt_active' : null].join(' ')}>
                                {contentData.vue}
                            </label>
                        </div>
                    </div>
                </div>
        )
    }
}


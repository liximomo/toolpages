import React from 'react';
import Formsy from 'formsy-react';
import {  
  FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup,
  FormsySelect, FormsyText, FormsyTime, FormsyToggle, FormsyAutoComplete
} from 'formsy-material-ui/lib';

import RaisedButton from 'material-ui/RaisedButton';

import { monday, friday }from '../../../utils/date';
import fetch, { params } from '../../../helper/fetch';

const mailConfig = {
  to: 'lanyi-tech-list@mufengcm.com',
  cc: 'chenbin@mufengcm.com',
  // to: 'xuyanghong@mufengcm.com',
  // user
  // pass
  // content
  // subject,
  // from
};

const styles = {
  MailSender: {
    margin: 'auto',
  },
  input: {
    width: '100%',
  },
  formControll: {
    width: '22%',
    minWidth: '256px',
    marginRight: '1em',
    display: 'inline-block',
  },
  errorMsg: {
    color: 'red',
  }
};

function toMonthDay(moment) {
  return moment.format('YYYY/MM/DD');
}

function weekSpan(offset = 0) {
 return [monday(offset * 7), friday(offset * 7)].map(toMonthDay).join('-');
}

const FormControllInline = (props) => (
  <div style={styles.formControll}>
    {props.children}
  </div>
);

const generateSubject = (name) => `${name}-${weekSpan()}工作周报`;

export default class MailSender extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    let userInfo = {};
    if (typeof localStorage !== 'undefined') {
      const localUserInfoStr = localStorage.getItem('userInfo');
      try {
        userInfo = JSON.parse(localUserInfoStr) || {};
      } catch (e) {
        // do nothing
      }
    }

    this.state = {
      active: false,
      canSend: false,
      error: null,
      pending: false,
      userInfo: userInfo,
    };
  }

  handleSend() {
    const msg = {
      ...mailConfig,
      ...this.props.getMessage(),
    };
  }

  handleValid = () => {
    this.setState({
      canSend: true,
    });
  }

  handleInValid = () => {
    this.setState({
      canSend: false,
    });
  }

  activeIntimate = () => {
    this.setState({
      active: true,
    });
  }

  sendMail = () => {
    this.setState({
      pending: true,
    });
    const model = this.refs.form.getModel();

    // 本地存储
    localStorage.setItem('userInfo', JSON.stringify(model));

    fetch.post('service/mail/send', {}, {
      body: params({
        ...mailConfig,
        subject: generateSubject(model.name),
        from: model.user,
        user: model.user,
        pass: model.pass,
        content: document.querySelector('[name="WeekReportRable"]').outerHTML,
      })
    }).then(resp => resp.json())
    .then(json => {
      if (json.code !== 250) {
        this.setState({
          msg: json.msg,
          error: true,
          pending: false,
        });
        return;
      }

      this.setState({
        pending: false,
      });
      notify('发送成功！');
    })
    .catch(error => {
      this.setState({
        pending: false,
      });
      notify('发送失败！');
    });
  }

  render () {
    const {
      active,
      canSend,
      error,
      msg,
      pending,
      userInfo,
    } = this.state;

    // if (!active) {
    //   return null;
    // }

    if (active) {
      return (
        <div style={styles.MailSender} >
          <Formsy.Form
            ref="form"
            onValid={this.handleValid}
            onInvalid={this.handleInValid}
          > 
            <FormControllInline>
              <FormsyText
                name="name"
                required
                floatingLabelText="名字"
                hintText="你的名字"
                defaultValue={userInfo.name}
                style={styles.input}
              />
            </FormControllInline>

            <FormControllInline>
              <FormsyText
                name="user"
                required
                floatingLabelText="邮箱"
                hintText="example@mufengcm.com"
                defaultValue={userInfo.user}
                style={styles.input}
              />
            </FormControllInline>
              
            <FormControllInline>
              <FormsyText
                name="pass"
                required
                floatingLabelText="密码"
                hintText="邮箱密码"
                type="password"
                defaultValue={userInfo.pass}
                style={styles.input}
              />
            </FormControllInline>
          </Formsy.Form>
          {error &&
            <div style={styles.errorMsg}>
              {msg}
            </div>
          }
          <RaisedButton
            disabled={!canSend}
            style={{
              marginTop: '1em',
            }}
            secondary
            label={pending ? '发送中...' : '发送邮件'}
            onClick={this.sendMail}
          />
        </div>
      );
    }

    return (
      <div style={styles.MailSender} >
        <RaisedButton
          style={{
            marginTop: '1em',
          }}
          primary
          label="亲密模式?"
          onClick={this.activeIntimate}
        />
      </div>
    );
  }
}

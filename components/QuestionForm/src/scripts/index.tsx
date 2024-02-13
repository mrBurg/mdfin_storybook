import React, {
  ChangeEvent,
  useCallback,
  useRef,
  useState,
  FocusEvent,
  useMemo,
} from 'react';
import _ from 'lodash';
import htmlParser from 'html-react-parser';

import scss from './../scss/QuestionForm.scss';

import { SimpleInput } from 'mdfin-simple-input';
import { ButtonWidget } from 'mdfin-button-widget';
import { CheckboxWidget } from 'mdfin-checkbox-widget';

import { TQuestionFormProps } from '../@types';

import defaultStaticData from './../../assets/defaultStaticData.json';

function QuestionForm(props: TQuestionFormProps) {
  const staticData = useMemo(
    () => Object.assign({}, defaultStaticData, props),
    [props]
  );

  const initialState = useRef({
    firstName: { value: '', id: 'firstName' },
    workEmail: { value: '', id: 'workEmail' },
    lastName: { value: '', id: 'lastName' },
    companyName: { value: '', id: 'companyName' },
    request: { value: '', id: 'request' },
    checkBox: { value: false, id: 'checkBox' },
  });

  const [formState, setFormState] = useState(initialState.current);
  const [checkbox, setCheckbox] = useState(false);

  const [invalidFields, setInvalidFields] = useState<Array<string | boolean>>(
    []
  );
  const [showSentForm, setShowSentForm] = useState(false);
  const setCurrentValue = (currentValue: string | boolean, id: string) => {
    setFormState({ ...formState, [id]: { value: currentValue, id: id } });
  };

  const [validForm, setValidForm] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const validateForm = useCallback(() => {
    let invalidFieldsInner: (string | boolean)[] = invalidFields;

    _.forEach(formState, (item: any) => {
      invalidFieldsInner = validateItem(
        item.value,
        item.id,
        invalidFieldsInner
      ) as (string | boolean)[];
    });

    setInvalidFields(invalidFieldsInner);

    if (invalidFieldsInner.length == 0) {
      return true;
    }

    return false;
  }, []);

  const validateItem = useCallback(
    (
      currentValue: string | boolean,
      id: string,
      invalidFieldsInner?: (string | boolean)[]
    ) => {
      /*Check if field contain in invalidFields */
      const containedField = () => {
        if (id != invalidFields.filter((item) => item == id)[0]) {
          if (invalidFieldsInner) {
            return (invalidFieldsInner = [...invalidFieldsInner, id]);
          }

          return setInvalidFields([...invalidFields, id]);
        }
      };

      if (id == 'request') {
        if (invalidFieldsInner) {
          return invalidFieldsInner;
        }

        return;
      }

      //Validate checkBox
      if (id == 'checkBox' && !formState.checkBox.value) {
        containedField();
        if (invalidFieldsInner) {
          return invalidFieldsInner;
        }

        return;
      }

      //Validate email
      if (id == 'workEmail' && typeof currentValue === 'string') {
        const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegEx.test(currentValue)) {
          containedField();
          if (invalidFieldsInner) {
            return invalidFieldsInner;
          }
          return;
        }
      }

      //Validate all other items
      if (typeof currentValue === 'string' && currentValue.length < 1) {
        containedField();
        if (invalidFieldsInner) {
          return invalidFieldsInner;
        }

        return;
      }

      const removedInvalidFields = invalidFields.filter((item) => item != id);

      if (invalidFieldsInner) {
        return (invalidFieldsInner = removedInvalidFields);
      }
      setInvalidFields(removedInvalidFields);
    },
    [formState.checkBox.value, invalidFields]
  );

  const submitForm = useCallback(async () => {
    /* const formDataFile = {
      dateTime: moment().format('YYYY-MM-DDTHH:mm:ss'),
      firstName: formState.firstName.value,
      lastName: formState.lastName.value,
      workEmail: formState.workEmail.value,
      companyName: formState.companyName.value,
      request: formState.request.value,
      checkBox: formState.checkBox.value,
    }; */

    const formData = {
      workEmail: formState.workEmail.value,
      firstName: formState.firstName.value,
      lastName: formState.lastName.value,
      companyName: formState.companyName.value,
      request: formState.request.value,
    };

    try {
      setIsDisabled(true);
      //const response = await axios.post('/api', formDataFile);  //write to file
      // const response = await commonApi.sendQuestionForm(formData);

      /* if (response && checkStatus(response)) {
        setValidForm(true);
        setFormState(initialState);
      } else {
        setValidForm(false);
      } */
      // setIsDisabled(false);
      // setShowSentForm(true);
    } catch (err) {
      console.log('~ Error:', err);
      setValidForm(false);
      setShowSentForm(true);
      setIsDisabled(false);
    }
  }, []);

  const onSubmitHandler = useCallback(() => {
    if (!!validateForm()) {
      submitForm();
    }
  }, []);

  const closeSentForm = useCallback(() => {
    setShowSentForm(false);
    if (validForm) {
      // smoothScroll('', 'header');
    }
  }, []);

  return (
    <div className={scss.questionInnerWrap}>
      {!showSentForm && (
        <>
          <h2 className={scss.title}>{htmlParser(staticData.title)}</h2>
          <span className={scss.subtitle}>{staticData.subtitle}</span>
          <form
            className={scss.form}
            onSubmit={(event) => {
              event.preventDefault();

              onSubmitHandler();
            }}
          >
            <div className={scss.inputsBlock}>
              <SimpleInput
                placeholder={staticData.firstName.placeholder}
                value={formState.firstName.value}
                error={invalidFields.includes('firstName')}
                callBack={(event: ChangeEvent<HTMLInputElement>) =>
                  setCurrentValue(event.target.value, 'firstName')
                }
                id={'firstName'}
                className={scss.input}
                onBlur={(event: FocusEvent<HTMLInputElement>) =>
                  validateItem(event.target.value, 'firstName')
                }
              />
              <SimpleInput
                placeholder={staticData.workEmail.placeholder}
                value={formState.workEmail.value}
                error={invalidFields.includes('workEmail')}
                errorMessage={staticData.invalidWorkEmailMessage}
                callBack={(event: ChangeEvent<HTMLInputElement>) =>
                  setCurrentValue(event.target.value, 'workEmail')
                }
                id={'workEmail'}
                className={scss.input}
                onBlur={(event: FocusEvent<HTMLInputElement>) =>
                  validateItem(event.target.value, 'workEmail')
                }
              />
              <SimpleInput
                placeholder={staticData.lastName.placeholder}
                value={formState.lastName.value}
                error={invalidFields.includes('lastName')}
                callBack={(event: ChangeEvent<HTMLInputElement>) =>
                  setCurrentValue(event.target.value, 'lastName')
                }
                id={'lastName'}
                className={scss.input}
                onBlur={(event: FocusEvent<HTMLInputElement>) =>
                  validateItem(event.target.value, 'lastName')
                }
              />
              <SimpleInput
                placeholder={staticData.companyName.placeholder}
                value={formState.companyName.value}
                error={invalidFields.includes('companyName')}
                callBack={(event: ChangeEvent<HTMLInputElement>) =>
                  setCurrentValue(event.target.value, 'companyName')
                }
                id={'companyName'}
                className={scss.input}
                onBlur={(event: FocusEvent<HTMLInputElement>) =>
                  validateItem(event.target.value, 'companyName')
                }
              />
            </div>
            <div className={scss.inputsBlock}>
              {/* <TextFiledComponent
                    placeholder={staticData.request.placeholder}
                    value={formState.request.value}
                    error={invalidFields.includes('request')}
                    callBack={(event) =>
                      setCurrentValue(event.target.value, 'request')
                    }
                    id={'request'}
                    className={scss.textField}
                  /> */}
              <div className={scss.textField}>
                {/* TODO */}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis repellat nesciunt at provident corporis eum debitis
                pariatur. Explicabo aliquam voluptates aliquid sapiente
                exercitationem optio molestiae ab perspiciatis, deleniti
                architecto a.
              </div>
              <div className={scss.submitForm}>
                <CheckboxWidget
                  checked={checkbox}
                  label={
                    <span className="CheckBoxComponent_text__PnI2k">
                      By sending this request I agree with the{' '}
                      <a
                        href="/docs/RecognID_Privacy_Policy_20220505.pdf"
                        target="_blank"
                      >
                        privacy policy
                      </a>{' '}
                      and ready to receive relevant information via email
                    </span>
                  }
                  onChange={() => setCheckbox(!checkbox)}
                />
                <ButtonWidget
                  disabled={isDisabled}
                  className={scss.buttonComponent}
                >
                  Submit
                </ButtonWidget>
              </div>
            </div>
          </form>
        </>
      )}
      {showSentForm && (
        <>
          <h2 className={scss.sentFormTitle}>
            {validForm
              ? staticData.validFormMessage
              : staticData.invalidFormMessage}
          </h2>
          <span className={scss.message}>
            {validForm
              ? staticData.validFormDescription
              : staticData.invalidFormDescription}
          </span>
          <div className={scss.submitImageWrap}>
            <div
              className={scss.submitImage}
              style={{
                backgroundImage: `url('${
                  validForm
                    ? '/images/form/submit.png'
                    : '/images/form/error.png'
                }')`,
              }}
            />
          </div>

          {/* TODO */}
          {closeSentForm}
          {/* <ButtonWidget
                callBack={() => closeSentForm()}
                className={style.buttonWidget}
                title={
                  validForm
                    ? staticData.validButtonText
                    : staticData.invalidButtonText
                }
              /> */}
        </>
      )}
    </div>
  );
}

export { QuestionForm };

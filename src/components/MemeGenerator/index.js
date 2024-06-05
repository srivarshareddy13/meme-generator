import {Component} from 'react'
import {
  AppContainer,
  MemeGeneratorContainer,
  Heading,
  FormAndMemeContainer,
  MemeContainer,
  TextContent,
  MemeGeneratorForm,
  CustomLabel,
  CustomInput,
  CustomSelect,
  CustomOption,
  GenerateButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    imgUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    topTextInput: '',
    bottomTextInput: '',
    backgroundImgUrl: '',
    activeFontSize: '',
  }
  onChangeImg = event => this.setState({backgroundImgUrl: event.target.value})

  onChangeBottomText = event =>
    this.setState({bottomTextInput: event.target.value})

  onChangeTopText = event => this.setState({topTextInput: event.target.value})

  onChangeOption = event => this.setState({fontSize: event.target.value})

  onSubmitForm = event => {
    event.preventDefault()
    const {topTextInput, bottomTextInput, fontSize, backgroundImgUrl} =
      this.state

    this.setState({
      imgUrl: backgroundImgUrl,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFontSize: fontSize,
    })
  }

  renderMemeGeneratorForm = () => {
    const {fontSize, backgroundImgUrl, topTextInput, bottomTextInput} =
      this.state

    return (
      <MemeGeneratorForm onSubmit={this.onSubmitForm}>
        <CustomLabel htmlFor="image">Image URL</CustomLabel>
        <CustomInput
          type="text"
          placeholder="Enter The Image URL"
          id="image"
          value={backgroundImgUrl}
          onChange={this.onChangeImg}
        />
        <CustomLabel htmlFor="topText">Top Text</CustomLabel>
        <CustomInput
          type="text"
          placeholder="Enter The Top Text"
          id="topText"
          value={topTextInput}
          onChange={this.onChangeTopText}
        />
        <CustomLabel htmlFor="bottomText">Bottom Text</CustomLabel>
        <CustomInput
          type="text"
          placeholder="Enter The Bottom Text"
          id="bottomText"
          value={bottomTextInput}
          onChange={this.onChangeBottomText}
        />
        <CustomLabel htmlFor="fontSize">Font Size</CustomLabel>
        <CustomSelect
          id="fontSize"
          value={fontSize}
          onChange={this.onChangeOption}
        >
          {fontSizesOptionsList.map(each => (
            <CustomOption key={each.optionId} value={each.optionId}>
              {each.displayText}
            </CustomOption>
          ))}
        </CustomSelect>
        <GenerateButton></GenerateButton>
      </MemeGeneratorForm>
    )
  }

  renderMeme = () => {
    const {imgUrl, topText, bottomText, activeFontSize} = this.state

    return (
      <MemeContainer data-testid="meme" backgroundImage={imgUrl}>
        <TextContent activeFontSize={activeFontSize}>{topText}</TextContent>
        <TextContent activeFontSize={activeFontSize}>{bottomText}</TextContent>
      </MemeContainer>
    )
  }

  render() {
    return (
      <AppContainer>
        <MemeGeneratorContainer>
          <Heading>Meme Generator</Heading>
          <FormAndMemeContainer>
            {this.renderMeme()}
            {this.renderMemeGeneratorForm()}
          </FormAndMemeContainer>
        </MemeGeneratorContainer>
      </AppContainer>
    )
  }
}
export default MemeGenerator

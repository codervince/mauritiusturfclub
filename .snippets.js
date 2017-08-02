//
//
// class App extends React.Component {
//   state = {
//     answer: 42,
//   };
//   asyncFunc = ()=> {
//     return Promise.resolve(37);
//   };
//
//   async componentDidMount() {
//     try{
//       this.setState({
//         answer: await this.asyncFunc()
//       });
//     } catch (e) {
//       console.log(e);
//     }
//
//   }
//   render () {
//     return (
//       <h2> Hello Class COmponent -- { this.state.answer}</h2>
//     );
//
//   }
// }
//
// export default App;

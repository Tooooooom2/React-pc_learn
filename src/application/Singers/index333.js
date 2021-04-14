
// import React from 'react'

// function Out(SendComponent) {
//   class LogProps extends React.Component {
//     componentDidUpdate(prevProps) {
//       console.log(prevProps)
//       console.log(this.props)
//     }
//     render() {
//       const { forwardRef, ...rest } = this.props
//       return (
//         <SendComponent
//             ref={forwardRef}
//             {...rest}
//         />
//       )
//     }
//   }

//   // let ccc = React.forwardRef((props, ref) => {
//   //   return (
//   //     <LogProps {...props}
//   //         forwardRef={ref}
//   //     />
//   //   )
//   // })

//   let ccc = React.forwardRef(
//     function alala (props, ref)  {
//     return (
//       <LogProps {...props}
//           forwardRef={ref}
//       />
//     )
//   }

//   alala.displayName = '小白'
//   )

//   console.log(ccc)

//   // let name = SendComponent.displayName || SendComponent.name
//   // console.log(name)
//   // name = '小白啊'
//   // console.log(name)

//   // ccc.displayName = name

//   console.log(ccc)

//   return ccc
// }

// export default React.memo(Out)


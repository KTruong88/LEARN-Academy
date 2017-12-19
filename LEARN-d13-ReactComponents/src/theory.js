
  func(event) {
      let obj = [{badRobot: translated.join("")}, {userName: event.target.value}]
      result = obj.map(el => {
        return el
      })
  }

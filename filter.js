function getShortMessages(messages) {
	var container = []
	return messages.map( function(m) { if (m.message.length < 50) container.push(m.message) })
	return container
}

module.exports = getShortMessages



      module.exports = function getShortMessages(messages) {
        return messages.filter(function(item) {
          return item.message.length < 50
        }).map(function(item) {
          return item.message
        })
      }
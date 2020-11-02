function formatTableHeaders(objectHeaders) {
    var keys = Object.keys(objectHeaders);
    
    var formatted = keys.map(header => {
      var data = header.replace('_usuario', ' ').toUpperCase();
      return data;
    });
    return formatted;
  }

  export default {formatTableHeaders};
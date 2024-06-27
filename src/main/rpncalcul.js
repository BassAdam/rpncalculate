
export function RPNCal(expression) {
    const tokens = expression.split(' ');
    const stack = [];
  
    tokens.forEach(token => {
      if (!isNaN(token)) {
        stack.push(Number(token));
      } else {
        let result;
        switch (token) {
          case '+': {
            const [b, a] = [stack.pop(), stack.pop()];
            result = a + b;
            break;
          }
          case '-': {
            const [b, a] = [stack.pop(), stack.pop()];
            result = a - b;
            break;
          }
          case '*': {
            const [b, a] = [stack.pop(), stack.pop()];
            result = a * b;
            break;
          }
          case '/': {
            const [b, a] = [stack.pop(), stack.pop()];
            result = a / b;
            break;
          }
          case 'SQRT': {
            const a = stack.pop();
            result = Math.sqrt(a);
            break;
          }
          case 'MAX': {
            result = Math.max(...stack);
            stack.length = 0;
            break;
          }
          default:
            throw new Error(`Invalid token: ${token}`);
        }
        stack.push(result);
      }
    });
  
    if (stack.length !== 1) {
      throw new Error('Invalid RPN expression');
    }
  
    return stack[0];
  }
  
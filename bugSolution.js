```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //Correct Logic: Now the useEffect will only run once on mount.
    console.log("Component mounted");
  }, []);

  return <div>Count: {count}</div>;
}
```
async function fetchGPTResponse(prompt) {
    const apiKey = "openai-api-key";  
    const apiUrl = "https://api.openai.com/v1/chat/completions";

    const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-4o",
            messages: [{"role": "user", "content": prompt}]
        })
    });

    if (response.status != 200) {
        return response.statusText;
    }
    const data = await response.json();
    return data.choices[0].message.content;
}
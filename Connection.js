using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Networking;
using System.Collections;
using TMPro;

public class UserInterfaceController : MonoBehaviour
{
    public TMP_InputField firstNameInput;
    public TMP_InputField lastNameInput;
    public TMP_InputField emailInput;
    public TMP_InputField passwordInput;
    public TMP_Text messageText;
    public Button registerButton;

    private const string baseUrl = "http://localhost:3000/api";

    void Start()
    {
        firstNameInput.text = "";
        lastNameInput.text = "";
        emailInput.text = "";
        passwordInput.text = "";

        registerButton.onClick.AddListener(OnRegisterButtonClick);
    }

    IEnumerator RegisterUser()
    {
        if (string.IsNullOrEmpty(firstNameInput.text) ||
            string.IsNullOrEmpty(lastNameInput.text) ||
            string.IsNullOrEmpty(emailInput.text) ||
            string.IsNullOrEmpty(passwordInput.text))
        {
            messageText.text = "Please fill in all fields";
            yield break;
        }
        
        string registerUrl = $"{baseUrl}/users/register";
        string json = $"{{\"firstName\":\"{firstNameInput.text}\", \"lastName\":\"{lastNameInput.text}\", \"email\":\"{emailInput.text}\", \"password\":\"{passwordInput.text}\"}}";
        byte[] bodyRaw = System.Text.Encoding.UTF8.GetBytes(json);

        using (UnityWebRequest www = new UnityWebRequest(registerUrl, "POST"))
        {
            www.SetRequestHeader("Content-Type", "application/json");
            www.uploadHandler = new UploadHandlerRaw(bodyRaw);
            www.downloadHandler = new DownloadHandlerBuffer();

            yield return www.SendWebRequest();

            if (www.result != UnityWebRequest.Result.Success)
            {
                messageText.text = "Error: " + www.error;
            }
            else
            {
                messageText.text = "User registered successfully";
            }
        }
    }

    public void OnRegisterButtonClick()
    {
        StartCoroutine(RegisterUser());
    }
}

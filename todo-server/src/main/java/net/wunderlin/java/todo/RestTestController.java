package net.wunderlin.java.todo;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnExpression;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class RestTestController {
	@Autowired
	private HttpServletRequest request;
	
    @GetMapping("/resttest")
    public String resttest(Model model) {
    	int port = request.getLocalPort();
    	String apiUri = "//" + request.getLocalName();
    	if (port != 80 && port != 443)
    		apiUri += ":" + port;
    	apiUri += "/api/node";
    	model.addAttribute("apiUri", apiUri);
    	model.addAttribute("pathInfo", request.getPathInfo());
    	model.addAttribute("port", port);
    	
        return "resttest";
    }

}
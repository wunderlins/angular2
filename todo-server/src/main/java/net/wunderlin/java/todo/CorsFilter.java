package net.wunderlin.java.todo;

import java.io.IOException;
import java.util.Arrays;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

@Component
public class CorsFilter extends OncePerRequestFilter {
	@Autowired
	private Environment environment;
	

    /**
     * Disable CORS
     * <p>
     * This method configures the behaviour of CORS. in a production environment it should not be required
     * because the client-application will be packages with this server. Therefore the origin of the 
     * request will always be the same host. 
     * <p>
     * This method should be configured properly in a production environment.
     * 
     * @see org.springframework.web.filter.OncePerRequestFilter#doFilterInternal(javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse, javax.servlet.FilterChain)
     */
    @Override
    protected void doFilterInternal(final HttpServletRequest request, final HttpServletResponse response,
                                    final FilterChain filterChain) throws ServletException, IOException {
        //System.out.println(Arrays.asList(environment.getActiveProfiles()));
		//System.out.println("Active Profiles: [" + String.join(",", this.environment.getActiveProfiles()) + "]");
    	if (NodeController.disable_cors) {
	    	response.addHeader("Access-Control-Allow-Origin", "*");
	        response.addHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
	        response.addHeader("Access-Control-Allow-Headers", "Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
	        response.addHeader("Access-Control-Expose-Headers", "Access-Control-Allow-Origin, Access-Control-Allow-Credentials");
	        response.addHeader("Access-Control-Allow-Credentials", "true");
	        response.addIntHeader("Access-Control-Max-Age", 10);
	        filterChain.doFilter(request, response);
    	}
    }
}
